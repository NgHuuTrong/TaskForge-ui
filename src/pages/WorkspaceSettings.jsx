import { useUser } from '../hooks/useAuthenticate';
import { useDeleteWorkspaceMember, useWorkspace } from '../hooks/useWorkspace';
import Button from '../ui/Button';
import EditWorkspace from '../ui/EditWorkspace';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';

function WorkspaceSettings() {
  const { workspace, isLoading } = useWorkspace();
  const { removeWorkspace, isLoadingDelete } = useDeleteWorkspaceMember();
  const { user: CurrUser, isLoadingUser } = useUser();
  if (isLoadingDelete || isLoadingUser || isLoading) return <Spinner />;

  const handleRemove = () => {
    removeWorkspace(workspace.id);
  };
  const isAdmin = workspace.adminIds.find((admin) => admin === CurrUser.id);
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <EditWorkspace workspace={workspace} />
      <Button classNames="flex justify-center" size="normal" type="danger" disabled={!isAdmin} onClick={handleRemove}>
        Delete this Workspace ?
      </Button>
    </Row>
  );
}

export default WorkspaceSettings;
