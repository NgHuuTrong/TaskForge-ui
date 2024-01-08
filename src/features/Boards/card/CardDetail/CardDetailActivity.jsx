import Button from '../../../../ui/Button';
import { useCallback, useEffect, useState } from 'react';
import { RxActivityLog } from 'react-icons/rx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useComments, useCreateComment, useDeleteComment, useUpdateComment } from '../../../../hooks/useComment';
import Spinner from '../../../../ui/Spinner';
import { format } from 'timeago.js';
import UserDetail from '../../../../ui/UserDetail';
import { useParams } from 'react-router';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useWebsocket } from '../../../../context/WebsocketContext';
import { useUser } from '../../../../hooks/useAuthenticate';

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'],
];
const module = {
  toolbar: toolbarOptions,
};

function CardDetailActivity({ card, assignees }) {
  const [contentComment, setContentComment] = useState('');

  const { cardId } = useParams();

  const { isLoading: isLoadingUser, user } = useUser();
  const { isLoading, comments } = useComments();
  const { isCreating, comment } = useCreateComment();

  const { socket } = useWebsocket();

  const isQuillEmpty = useCallback((value) => {
    if (value.replace(/<(.|\n)*?>/g, '').trim().length === 0 && !value.includes('<img')) {
      return true;
    }
    return false;
  }, []);

  if (isLoading || isLoadingUser) return <Spinner />;

  function handleComment() {
    if (!isQuillEmpty(contentComment)) {
      comment({ cardId, body: { content: contentComment } });
      setContentComment('');

      const len = assignees.length;
      for (let i = 0; i < len; i++) {
        if (assignees[i].id !== user.id) {
          socket.emit('createNotification', {
            type: 'COMMENT',
            receiverId: assignees[i].id,
            cardId: card.id,
          });
        }
      }
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-5">
        <RxActivityLog size="2rem" />
        <h1 className="text-[1.7rem] text-[--color-grey-700] font-semibold">Activity</h1>
      </div>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-1">{user && <UserDetail user={user} showDetail={false} />}</div>
        <div className="col-span-10">
          <ReactQuill
            className="w-full"
            modules={module}
            theme="snow"
            value={contentComment}
            onChange={setContentComment}
          />
          {contentComment && (
            <div className="flex gap-3 mt-3">
              <Button type="primary" size="small" disabled={isCreating} onClick={handleComment}>
                Save
              </Button>
              <Button type="secondary" size="small" disabled={isCreating} onClick={() => setContentComment('')}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} user={user} />
      ))}
    </div>
  );
}

function Comment({ comment, user }) {
  const [allowEdit, setAllowEdit] = useState(false);
  const [value, setValue] = useState('');

  const { isDeleting, removeComment } = useDeleteComment();
  const { isUpdating, updateComment } = useUpdateComment();
  const queryClient = useQueryClient();

  const { cardId } = useParams();

  useEffect(
    function () {
      if (comment) {
        setValue(comment.content);
      }
    },
    [comment],
  );

  const isQuillEmpty = useCallback((value) => {
    if (value.replace(/<(.|\n)*?>/g, '').trim().length === 0 && !value.includes('<img')) {
      return true;
    }
    return false;
  }, []);

  return (
    <div className="grid grid-cols-12 mt-5 w-full">
      <div className="col-span-1">
        {comment?.commenter && <UserDetail user={comment.commenter} showDetail={false} />}
      </div>
      <div className="col-span-10">
        <p className="space-x-3 w-full">
          <span className="font-medium text-[--color-grey-900]">{comment?.commenter.name}</span>
          <span className="text-base text-[--color-grey-500]">{format(comment?.updatedAt)}</span>
        </p>
        {allowEdit ? (
          <>
            <ReactQuill className="w-full" modules={module} theme="snow" value={value} onChange={setValue} />
            <div className="flex space-x-3 mt-3 ">
              <Button
                type="primary"
                size="small"
                disabled={isQuillEmpty(value) || isDeleting || isUpdating}
                onClick={() => {
                  updateComment(
                    { commentId: comment.id, body: { content: value } },
                    {
                      onSuccess: () => {
                        toast.success('Edit comment successfully !');
                        queryClient.invalidateQueries({ queryKey: ['comments', cardId], exact: true });
                        setAllowEdit(false);
                      },
                    },
                  );
                }}
              >
                Save
              </Button>
              <Button
                type="secondary"
                size="small"
                onClick={() => {
                  setValue(comment.content);
                  setAllowEdit(false);
                }}
              >
                Discard changes
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              className="w-full bg-[--color-grey-0] p-3 border rounded-2xl outline-[--color-blue-700] shadow grow"
              dangerouslySetInnerHTML={{ __html: value }}
              disabled={!allowEdit}
            />
            {comment.commenter.id === user.id && (
              <div className="flex items-center gap-2">
                <button
                  className="text-[--color-grey-500] text-lg cursor-pointer underline"
                  disabled={isDeleting || isUpdating}
                  onClick={() => setAllowEdit(true)}
                >
                  Edit
                </button>
                <span className="text-[--color-grey-500]">•</span>
                <button
                  className="text-[--color-grey-500] text-lg cursor-pointer underline"
                  disabled={isDeleting || isUpdating}
                  onClick={() => removeComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CardDetailActivity;
