import Row from '../ui/Row';
import DetailHeader from '../features/WorkspaceMember/DetailHeader';
import InviteMember from '../features/WorkspaceMember/InviteMember';
import Members from '../features/WorkspaceMember/Members';
import { useWorkspace, useDeleteWorkspaceMember } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';

function WorkspaceMember() {
  const { workspace, isLoading } = useWorkspace();
  const { deleteWorkspaceUser } = useDeleteWorkspaceMember();

  if (isLoading) return <Spinner />;

  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <DetailHeader workspace={workspace} />
      <InviteMember inviteToken = {workspace.inviteToken} />
      <Members users={workspace.members} workspace={workspace} deleteWorkspaceUser={deleteWorkspaceUser} />
    </Row>
  );
}

export default WorkspaceMember;
