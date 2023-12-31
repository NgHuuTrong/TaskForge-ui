import Heading from '../ui/Heading';
import Row from '../ui/Row';
import BoardCard from '../features/Boards/BoardCard';
import { AiOutlineClockCircle } from 'react-icons/ai';
import WorkspaceSection from '../features/Boards/WorkspaceSection';
import Button from '../ui/Button';
import workspaces from '../data/workspaces.json';

function Boards() {
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <div className="mb-[5rem]">
        <Heading classNames="flex items-center gap-4 mb-[1rem]" as="h5">
          <AiOutlineClockCircle size="2.5rem" />
          Recently viewed
        </Heading>
        <BoardCard />
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
  );
}

export default Boards;
