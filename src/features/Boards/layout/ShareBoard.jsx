import { useEffect, useState } from 'react';
import { Dropdown, Input, Modal, Select } from 'antd';
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Heading from '../../../ui/Heading';
import Button from '../../../ui/Button';
import Row from '../../../ui/Row';
import UserDetail from '../../../ui/UserDetail';
import { useBoard, useDeleteMemberFromBoard } from '../../../hooks/useBoard';
import { useWorkspaceMembers } from '../../../hooks/useWorkspace';
import Spinner from '../../../ui/Spinner';
import { useAddUserToBoard } from '../../../hooks/useBoard';
import { useParams } from 'react-router-dom';
import { useWebsocket } from '../../../context/WebsocketContext';
import copy from 'clipboard-copy';
import toast from 'react-hot-toast';

function MemberRow({ role, member, isAdmin = false, isCurrent = false, deleteBoardMember, boardId }) {
  const handleSelect = (data) => {
    if (data === 'Remove from board' && isAdmin) {
      deleteBoardMember({ memberId: member.userId, boardId });
    }
  };

  return (
    <Row>
      <UserDetail user={member.user} size="32" />
      <div>
        {isCurrent && <strong className="mr-4">You</strong>}
        <Select
          defaultValue={role}
          dropdownStyle={{ width: '28rem' }}
          onSelect={(data) => handleSelect(data)}
          options={role === "Admin" ? [
            {
              value: 'Admin',
              disabled: true,
            }
          ] : [
            {
              value: 'Member',
              disabled: true,
            },
            {
              value: 'Remove from board',
              disabled: !isAdmin || isCurrent,
            }
          ]
          }
        />
      </div>
    </Row>
  );
}

function ShareBoard({ creator, members, curMember, isAdmin, workspaceId }) {
  const [openModal, setOpenModal] = useState(false);
  const { isDeleting, deleteBoardMember } = useDeleteMemberFromBoard();
  const [wpMembers, setWpMembers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const { isLoading, members: workspaceMembers } = useWorkspaceMembers(workspaceId);
  const { isAdding, addUser } = useAddUserToBoard();
  const { board, isLoading: isLoadingBoard } = useBoard();

  const { boardId } = useParams();
  const { socket } = useWebsocket();

  const domain = window.location.host;
  const handleCopyLink = async () => {
    try {
      await copy(domain + '/b/invite/' + board?.inviteToken);
      toast.success('Copy to clipboard successfully');
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
      toast.error('Cannot copy invite link');
    }
  };

  useEffect(() => {
    setWpMembers(workspaceMembers || []);
  }, [workspaceMembers]);

  function handleSearch(event) {
    if (event.target.value.trim() === '') {
      setWpMembers(workspaceMembers);
    } else {
      setWpMembers(
        workspaceMembers.filter((member) => {
          if (
            member.email.toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
            member.name.toLowerCase().includes(event.target.value.trim().toLowerCase())
          )
            return true;
          return false;
        }),
      );
    }
    setSearchValue(event.target.value);
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} size="normal">
        <AiOutlineUserAdd />
        <span>Share</span>
      </Button>
      <Modal
        footer={null}
        centered
        open={openModal}
        onBlur={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="p-[2rem] flex flex-col gap-8">
          <Heading as="h3">Share board</Heading>
          <div className="flex gap-4">
            <Dropdown
              getPopupContainer={(trigger) => trigger.parentElement}
              trigger={['click']}
              dropdownRender={() => {
                if (isLoading || isLoadingBoard) return <Spinner />;
                return (
                  <div className="max-h-[200px] overflow-y-scroll">
                    {wpMembers.map((user) => {
                      const isCreator = creator.userId === user.id;
                      const isBoardMember = members.some((member) => member.userId === user.id);
                      const isCurrentMember = curMember ? curMember.userId === user.id : false;

                      return (
                        <button
                          className="w-full rounded-xl flex items-center gap-[1rem] p-[0.5rem] my-[0.5rem] cursor-pointer hover:bg-[--color-grey-200]"
                          key={user.id}
                          disabled={isCreator || isBoardMember || isCurrentMember || isAdding}
                          onClick={() => {
                            addUser({ body: { userId: user.id, boardId: +boardId } });
                            socket.emit('createNotification', {
                              type: 'ADD_TO_BOARD',
                              receiverId: user.id,
                              boardId: +boardId,
                            });
                          }}
                        >
                          <UserDetail user={user} showDetail={false} size="32" />
                          <div className="flex-grow">
                            <p className="text-left">{user.name}</p>
                            {isBoardMember && (
                              <p className="text-left text-[1.3rem] text-[--color-grey-400]">Board Member</p>
                            )}
                            {isCurrentMember ? (
                              <p className="text-left text-[1.3rem] text-[--color-grey-400]">
                                You • {isCreator ? 'Board Admin' : 'Board Member'}
                              </p>
                            ) : (
                              isCreator && (
                                <p className="text-left text-[1.3rem] text-[--color-grey-400]">Board Admin</p>
                              )
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                );
              }}
            >
              <Input placeholder="Email address or name" value={searchValue} onChange={handleSearch} />
            </Dropdown>
          </div>
          <Row>
            <div className="flex flex-col">
              <span>Share this board with a link</span>
              <Button type="text" classNames="pl-0 pt-0 pb-0">
                Disable Link
              </Button>
            </div>
            <Button type="icon" size="normal" onClick={handleCopyLink}>
              <IoMdAttach className="rotate-45" />
              <span className="ml-[0.6rem]">Copy link</span>
            </Button>
          </Row>

          {isAdmin || <MemberRow role='Member' member={curMember} isCurrent />}
          <MemberRow role="Admin" member={creator} isAdmin={isAdmin} isCurrent={isAdmin} />
          {members.map((member) => (
            <MemberRow
              role="Member"
              isAdmin={isAdmin}
              member={member}
              key={member.userId}
              deleteBoardMember={isAdmin ? deleteBoardMember : null}
              boardId={boardId}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ShareBoard;