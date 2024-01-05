import Row from '../ui/Row';
import DetailHeader from '../features/WorkspaceMember/DetailHeader';
import InviteMember from '../features/WorkspaceMember/InviteMember';
import Members from '../features/WorkspaceMember/Members';
import { useWorkspace, useDeleteWorkspaceMember } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';
import Button from '../ui/Button';
import { useUser } from '../hooks/useAuthenticate';

function WorkspaceMember() {
  const { workspace, isLoading } = useWorkspace();
  const { deleteWorkspaceUser } = useDeleteWorkspaceMember();
  const { user: CurrUser, isLoadingUser } = useUser();
  const { removeWorkspace, isLoadingDelete } = useDeleteWorkspaceMember();
  const handleRemove = () => {
    removeWorkspace(workspace.id)
  }
  
  if (isLoading || isLoadingUser || isLoadingDelete) return <Spinner />;
  const isAdmin = workspace.adminIds.find((admin) => admin === CurrUser.id);
  
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <DetailHeader workspace={workspace} />
      <InviteMember />
      <Members users={workspace.members} workspace={workspace} deleteWorkspaceUser={deleteWorkspaceUser} />
      <Button classNames='flex justify-center w-[150px]' size="normal" type="danger" disabled={!isAdmin} onClick={handleRemove}>
        Delete Workspace
      </Button>
    </Row>
  );
}

export default WorkspaceMember;
