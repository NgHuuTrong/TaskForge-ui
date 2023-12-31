import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { AiOutlineClockCircle } from 'react-icons/ai';
import WorkspaceSection from '../features/Boards/WorkspaceSection';
import Button from '../ui/Button';
import { useWorkspaces } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';

function Boards() {
  const { workspaces, isLoading } = useWorkspaces();
  if (isLoading) return <Spinner />;
  return (
    <div className="h-full overflow-scroll">
      <Row type="ver" classNames="pt-[2rem] px-[2rem]">
        <div className="mb-[5rem]">
          <Heading classNames="flex items-center gap-4 mb-[1rem]" as="h5">
            <AiOutlineClockCircle size="2.5rem" />
            Recently viewed
          </Heading>
        </div>
        <div className="space-y-10">
          <Heading classNames="uppercase flex items-center gap-4" as="h4">
            Your workspaces
          </Heading>
          {workspaces.map((workspace) => (
            <WorkspaceSection workspace={workspace} key={workspace.id} />
          ))}
          <Button classNames="flex items-center font-semibold gap-2 px-[2rem]" size="small" type="secondary">
            View all closed boards
          </Button>
        </div>
      </Row>
    </div>
  );
}

export default Boards;
