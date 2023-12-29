import { HiUser, HiUsers } from 'react-icons/hi';

import Row from '../ui/Row';
import BoardSection from '../features/WorkspaceHome/BoardSection';
import EditWorkspace from '../ui/EditWorkspace';
import { useWorkspace } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';

function WorkspaceHome() {
  const { isLoading, workspace } = useWorkspace();
  if (isLoading) return <Spinner />;
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
        items={workspace.boards.filter((board) => board.starred)}
      />
      <BoardSection
        title={
          <>
            <HiUser size={24} />
            <span>Your boards</span>
          </>
        }
        items={workspace.boards}
      />
      <BoardSection
        title={
          <>
            <HiUsers size={24} />
            <span>All boards in this Workspace</span>
          </>
        }
        items={workspace.boards}
      />
    </Row>
  );
}

export default WorkspaceHome;
