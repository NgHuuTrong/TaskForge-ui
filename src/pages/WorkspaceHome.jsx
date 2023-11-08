import { HiUser, HiUsers } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import Row from '../ui/Row';
import recents from '../data/recent.json';
import starreds from '../data/starred.json';
import BoardSection from '../features/WorkspaceHome/BoardSection';
import EditWorkspace from '../ui/EditWorkspace';
import workspaces from '../data/workspaces.json';

function WorkspaceHome() {
  const { workspaceId } = useParams();
  const workspace = workspaces[workspaceId];

  return (
    <Row type="ver">
      <EditWorkspace workspace={workspace} />
      <hr className="border-[--color-grey-300] m-[1.6rem]" />
      <BoardSection
        title={
          <>
            <HiUser size={24} />
            <span>Starred boards</span>
          </>
        }
        items={starreds}
      />
      <BoardSection
        title={
          <>
            <HiUser size={24} />
            <span>Your boards</span>
          </>
        }
        items={recents}
      />
      <BoardSection
        title={
          <>
            <HiUsers size={24} />
            <span>All boards in this Workspace</span>
          </>
        }
        items={recents}
      />
    </Row>
  );
}

export default WorkspaceHome;
