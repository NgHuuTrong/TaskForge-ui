import users from '../data/users.json';
import Row from '../ui/Row';
import DetailHeader from '../features/WorkspaceMember/DetailHeader';
import InviteMember from '../features/WorkspaceMember/InviteMember';
import Members from '../features/WorkspaceMember/Members';
import { useWorkspace } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';

function WorkspaceMember() {
  const { workspace, isLoading } = useWorkspace();
  if (isLoading) return <Spinner />;
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <DetailHeader workspace={workspace} />
      <InviteMember />
      <Members users={users} />
    </Row>
  );
}

export default WorkspaceMember;
