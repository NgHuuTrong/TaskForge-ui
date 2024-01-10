import { AiOutlineUserAdd } from 'react-icons/ai';
import Button from '../../ui/Button';
import EditWorkspace from '../../ui/EditWorkspace';
import Heading from '../../ui/Heading';
import { Dropdown, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import Row from '../../ui/Row';
import copy from 'clipboard-copy';
import { IoMdAttach } from 'react-icons/io';
import { useUsers } from '../../hooks/useUser';
import UserDetail from '../../ui/UserDetail';
import { useSendInvitation } from '../../hooks/useWorkspace';
import toast from 'react-hot-toast';

function DetailHeader({ workspace }) {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { isLoading, users } = useUsers();
  const { isSending, sendInvitation } = useSendInvitation();

  const domain = window.location.host;

  const handleCopyLink = async () => {
    try {
      await copy(domain + '/w/invite/' + workspace.inviteToken);
      toast.success('Copy to clipboard successfully');
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
      toast.error('Cannot copy invite link');
    }
  };

  useEffect(() => {
    if (users && users.length > 0) {
      setFilteredUsers(users);
    }
  }, [users])

  function handleSearch(event) {
    if (event.target.value.trim() === '') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(member => {
        if (
          member.email.toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
          member.name.toLowerCase().includes(event.target.value.trim().toLowerCase())
        )
          return true;
        return false;
      }));
    }
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="flex justify-between items-start">
        <EditWorkspace workspace={workspace} />
        <Button size="normal" onClick={() => setOpenModal(true)}>
          <AiOutlineUserAdd size={16} />
          <span className="ml-[0.6rem]">Invite Workspace members</span>
        </Button>
        <Modal centered open={openModal} width={600} footer={false} title="" onCancel={() => setOpenModal(false)}>
          <div className="p-[2rem] flex flex-col gap-8">
            <Heading as="h3">Invite to Workspace</Heading>
            <Dropdown
              getPopupContainer={(trigger) => trigger.parentElement}
              trigger={['click']}
              open={searchValue}
              dropdownRender={() => {
                return (
                  <div className="max-h-[200px] overflow-y-scroll">
                    {
                      filteredUsers.map(user => {
                        const isAdmin = workspace.adminIds.includes(user.id);
                        const isMember = workspace.members.some(member => member.id === user.id);

                        return <button
                          className='w-full rounded-xl flex items-center gap-[1rem] p-[0.5rem] my-[0.5rem] cursor-pointer hover:bg-[--color-grey-200]'
                          key={user.id}
                          disabled={isAdmin || isMember || isSending}
                          onClick={() => sendInvitation({ workspaceId: workspace.id, userId: user.id })}
                        >
                          <UserDetail user={user} showDetail={false} size="32" />
                          <div className='flex-grow'>
                            <p className='text-left'>{user.name}</p>
                            {
                              isAdmin ? <p className='text-left text-[1.3rem] text-[--color-grey-400]'>Workspace Admin</p> : (
                                isMember && <p className='text-left text-[1.3rem] text-[--color-grey-400]'>Workspace Member</p>
                              )
                            }
                          </div>
                        </button>
                      })
                    }
                  </div>
                );
              }}
            >
              <Input
                className="w-full"
                placeholder="Email address or name"
                value={searchValue}
                onChange={handleSearch}
              />
            </Dropdown>
            <Row>
              <div className="flex flex-col">
                <span>Invite someone to {workspace.name} Workspace with a link</span>
                <Button type="text" classNames="pl-0 pt-0 pb-0">
                  Disable Link
                </Button>
              </div>
              <Button type="icon" size="normal" onClick={()=>handleCopyLink()}>
                <IoMdAttach className="rotate-45" />
                <span className="ml-[0.6rem]">Copy link</span>
              </Button>
            </Row>
          </div>
        </Modal>
      </div>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
      <Heading as="h3">Workspace members ({workspace.members.length})</Heading>
      <Heading as="h5" classNames="font-normal">
        Workspace members can view and join all Workspace visible boards and create new boards in the Workspace.
      </Heading>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
    </>
  );
}

export default DetailHeader;
