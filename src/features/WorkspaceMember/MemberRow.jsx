import { HiXMark } from 'react-icons/hi2';
import Button from '../../ui/Button';
import UserDetail from '../../ui/UserDetail';
import { useUser } from '../../hooks/useAuthenticate';
import { useLeaveWorkspace } from '../../hooks/useWorkspace';

function MemberRow({ user, workspace, deleteWorkspaceUser }) {
  const { user: CurrUser, isLoading } = useUser();
  const { isLeaving, mutate: leaveWorkspace } = useLeaveWorkspace();

  const isAdmin = workspace.adminIds.find((admin) => admin === CurrUser.id);

  const handleRemoveClick = () => {
    deleteWorkspaceUser({ workspaceId: workspace.id, userId: user.id });
  };

  return (
    <>
      <div className="flex justify-between">
        <UserDetail user={user} />
        <div className="flex items-center gap-[1rem]">
          <Button size="normal" type="icon" disabled>
            {workspace.adminIds.includes(user.id) ? 'Admin' : 'Member'}
          </Button>
          {
            CurrUser.id === user.id ? <Button
              disabled={isLeaving} size="normal" type="icon"
              onClick={() => leaveWorkspace(workspace.id)}
            >
              <HiXMark size={16} className="mr-2" />
              Leave
            </Button> : <Button disabled={!isAdmin || isLoading} size="normal" type="icon" onClick={handleRemoveClick}>
              <HiXMark size={16} className="mr-2" />
              Remove...
            </Button>
          }
        </div>
      </div>
      <hr className="border-[--color-grey-300]" />
    </>
  );
}

export default MemberRow;
