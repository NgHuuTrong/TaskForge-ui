import { Avatar, Button } from 'antd';
import { BiMessageRounded } from 'react-icons/bi';
import { MdAttachFile } from 'react-icons/md';
import UserDetail from '../../../ui/UserDetail';
import { useDeleteCard } from '../../../hooks/useCard';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks/useAuthenticate';
import Spinner from '../../../ui/Spinner';

function Card({ listId, boardId, card, setMoveCardId, provided, setOpenCardDetailModal, isMyCard }) {
  const { id, title, cardAttachments, comments, cardAssignees } = card;
  const assignees = cardAssignees?.map((cardAssignee) => {
    return cardAssignee.assignee;
  });
  const { isDeleting, removeCard } = useDeleteCard();
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  if(isLoading) return <Spinner />;

  return (
    card && <div
      className={`group static mb-2 flex w-full flex-col rounded-lg bg-[--color-grey-200] border-2 border-[--color-grey-700] p-4 pr-8 shadow-md ${(isMyCard && !card?.cardAssignees?.some(c => c.assigneeId === user.id)) && 'opacity-40'}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={() => {
        navigate(`/b/${boardId}/c/${card.id}/card-detail`)
        setOpenCardDetailModal(true);
      }}
    >
      <p className="my-1 text-2xl text-[--color-grey-700] text-left">{title}</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          {
            comments.length > 0 && <div className="mr-4 flex items-center">
              <BiMessageRounded />
              <span className="ml-1 text-lg">{comments.length}</span>
            </div>
          }
          {
            cardAttachments.length > 0 && <div className="flex items-center">
              <MdAttachFile />
              <span className="ml-1 text-lg">{cardAttachments.length}</span>
            </div>
          }
        </div>
        <div className="flex justify-end">
          {
            assignees.length > 0 && <Avatar.Group
              maxCount={2}
              maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
              size={assignees.length}
            >
              {assignees?.map(assignee => <UserDetail key={assignee.id} user={assignee} showDetail={false} size={24} />)}
            </Avatar.Group>
          }
        </div>
      </div>
      <div className="absolute left-full top-[1px] z-10 opacity-0 bg-[--color-grey-0] group-hover:opacity-100">
        <Button className="flex w-full items-center justify-center rounded-none border-none text-xl text-[--color-grey-800]">
          Edit
        </Button>
        <Button
          className="flex items-center justify-center rounded-none border-none text-xl text-[--color-grey-800] hover:bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation();
            setMoveCardId(card.id);
          }}
        >
          Move to
        </Button>
        <Button
          className="flex w-full items-center justify-center rounded-none border-none text-xl text-[--color-grey-800]"
          onClick={(e) => {
            e.stopPropagation();
            removeCard(id);
          }}
          disabled={isDeleting}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Card;
