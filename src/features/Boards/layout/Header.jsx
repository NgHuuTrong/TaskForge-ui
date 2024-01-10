import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { Tooltip, Avatar } from 'antd';

import Chat from '../../Chat/Chat';

import MoreBtn from './MoreBtn';
import VisibilityBtn from './VisibilityBtn';
import UserDetail from '../../../ui/UserDetail';
import LeftSection from './LeftSection';
import ShareBoard from './ShareBoard';
import Button from '../../../ui/Button';
import { useJoinBoard } from '../../../hooks/useBoard';

function Header({ setBackground, background, board }) {
  const isAdmin = board.creatorId === board?.curMember?.userId;
  const { isJoining, mutate: joinBoard } = useJoinBoard();
  return (
    <div className="sticky top-0 left-0 backdrop-blur-[6px] bg-[#0000003d]">
      <div className="flex justify-between p-[10px]">
        <LeftSection board={board} />

        <div className="flex items-center gap-[20px]">
          <Avatar.Group
            maxCount={3}
            size="medium"
            maxStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
            }}
          >
            {isAdmin || (board.curMember && <UserDetail user={board.curMember.user} showDetail={false} size={28} />)}
            <div className="relative">
              <UserDetail user={board.creator.user} showDetail={false} size={28} />
              <Tooltip title="This member is admin of this board" placement="bottom">
                <RiArrowUpDoubleLine className="absolute left-0 bottom-0 text-[blue] bg-white rounded-full" />
              </Tooltip>
            </div>
            {board.boardMembers.map((member) => (
              <UserDetail key={member.userId} showDetail={false} size={28} user={member.user} />
            ))}
          </Avatar.Group>

          <VisibilityBtn board={board} />

          {board.curMember && <Chat curMember={board.curMember} boardId={board.id} />}

          <MoreBtn
            curMember={board.curMember}
            background={background}
            setBackground={setBackground}
            creator={board.creator}
          />

          {board.curMember ? (
            <ShareBoard
              creator={board.creator}
              members={board.boardMembers}
              curMember={board.curMember}
              isAdmin={isAdmin}
              workspaceId={board.workspaceId}
              inviteToken={board.inviteToken}
            />
          ) : (
            <Button size="normal" type="secondary" onClick={() => joinBoard(board.id)} disabled={isJoining}>
              Join Board
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
