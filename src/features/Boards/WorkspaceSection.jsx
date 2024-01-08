import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { PiGearLight } from 'react-icons/pi';

import BoardCard from './BoardCard';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo';
import CreateBoardCard from '../../ui/CreateBoardCard';
import { useUser } from '../../hooks/useAuthenticate';

function WorkspaceSection({ workspace }) {
  const { user } = useUser();

  return (
    <div className="space-y-8 pb-[3rem]">
      <Row>
        <div className="flex items-center gap-5 text-[1.6rem] leading-[30px] font-bold">
          <Logo size="medium" bgImage="linear-gradient(#4bce97, #216e4e)">
            {workspace.name[0]}
          </Logo>
          {workspace.name}
        </div>
        <div className="flex gap-4">
          <Button to={`/w/${workspace.id}/home`} classNames="font-semibold" size="small" type="secondary">
            <HiOutlineViewBoards size="1.2rem" />
            Boards
          </Button>
          <Button to={`/w/${workspace.id}/members`} classNames="font-semibold" size="small" type="secondary">
            <HiOutlineUsers size="1.2rem" />
            Members ({workspace?.workspaceMembers.length})
          </Button>
          <Button classNames="font-semibold" size="small" type="secondary">
            <PiGearLight size="1.5rem" />
            Settings
          </Button>
        </div>
      </Row>
      <div className="flex items-center flex-wrap gap-5">
        {workspace.boards.map((board) => {
          if (user?.id !== board.creatorId && board.closed) return null;
          return <BoardCard key={board.id} board={board} />;
        })}
        <CreateBoardCard initialValues={{ workspaceId: workspace.id, type: 'Workspace' }} />
      </div>
    </div>
  );
}

export default WorkspaceSection;
