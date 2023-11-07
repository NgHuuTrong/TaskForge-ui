import Row from '../../ui/Row';
import Button from '../../ui/Button';
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { PiGearLight } from 'react-icons/pi';
import BoardCard from './BoardCard';
import Logo from '../../ui/Logo';
import CreateBoardCard from '../../ui/CreateBoardCard';

function WorkspaceSection({ workspace }) {
  return (
    <div className="space-y-8 pb-[3rem]">
      <Row>
        <div className="flex items-center gap-5 text-[1.6rem] leading-[30px] font-bold">
          <Logo size="medium" bgImage="linear-gradient(#4bce97, #216e4e)">
            {workspace.workspaceName[0]}
          </Logo>
          {workspace.workspaceName}
        </div>
        <div className="flex gap-4">
          <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
            <HiOutlineViewBoards size="1.2rem" />
            Boards
          </Button>
          <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
            <HiOutlineUsers size="1.2rem" />
            Members (1)
          </Button>
          <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
            <PiGearLight size="1.5rem" />
            Settings
          </Button>
        </div>
      </Row>
      <div className="flex items-center flex-wrap gap-5">
        <BoardCard />
        <BoardCard />
        <CreateBoardCard />
      </div>
    </div>
  );
}

export default WorkspaceSection;
