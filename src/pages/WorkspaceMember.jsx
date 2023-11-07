import { useParams } from 'react-router-dom';

import workspaces from '../data/workspaces.json';
import users from '../data/users.json';
import Row from '../ui/Row';
import DetailHeader from '../features/WorkspaceMember/DetailHeader';
import InviteMember from '../features/WorkspaceMember/InviteMember';
import Members from '../features/WorkspaceMember/Members';

function WorkspaceMember() {
  const { workspaceId } = useParams();
  const workspace = workspaces[workspaceId];

  return (
    <Row type="ver">
      <DetailHeader workspace={workspace} />
      <InviteMember />
      <Members users={users} />
    </Row>
  );
}

export default WorkspaceMember;
