import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { Tooltip, Avatar } from 'antd';

import Chat from '../../Chat/Chat';

import MoreBtn from './MoreBtn';
import VisibilityBtn from './VisibilityBtn';
import UserDetail from '../../../ui/UserDetail';
import users from '../../../data/users.json';
import LeftSection from './LeftSection';
import ShareBoard from './ShareBoard';

function Header({ setBackground, background, board }) {
  const creator = board.boardMembers.find((member) => member.userId === board.creatorId)?.user;
  const members = board.boardMembers.filter((member) => member.userId !== board.creatorId).map((el) => el.user);

  function renderMemberAvatars() {
    return board.boardMembers.map((member) => {
      if (member.userId !== board.creatorId) {
        return <UserDetail key={member.id} showDetail={false} size={28} user={member.user} />
      } else {
        return <div className="relative cursor-pointer" key={member.id}>
          <UserDetail user={member.user} showDetail={false} size={28} />
          <Tooltip title="This member is admin of this board" placement="bottom">
            <RiArrowUpDoubleLine className="absolute left-0 bottom-0 text-[blue] bg-white rounded-full" />
          </Tooltip>
        </div>
      }
    })
  }

  return (
    <div className="backdrop-blur-[6px] bg-[#0000003d]">
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
            {renderMemberAvatars()}
          </Avatar.Group>

          <VisibilityBtn board={board} />

          <Chat others={members} currentUser={users[0]} boardId={1} />

          <MoreBtn background={background} se tBackground={setBackground} creator={creator} />

          {board.curMember ? (
            <ShareBoard creator={creator} members={members} curMember={board.curMember} />
          ) : (
            <div className="p-[5px] rounded-[4px] hover:bg-[#8896a6] cursor-pointer">
              <span>Join board</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;