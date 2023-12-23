import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { Tooltip, Avatar, Input } from 'antd';

import Chat from '../../Chat/Chat';

import MoreBtn from './MoreBtn';
import ShareBoard from './ShareBoard';
import VisibilityBtn from './VisibilityBtn';
import UserDetail from '../../../ui/UserDetail';
import users from '../../../data/users.json';
const creator = users.pop();
const members = users;

function Header({ setBackground, background, board }) {
  const [changeTitleBox, setChangeTitleBox] = useState(false);
  const [favorite, setFavorite] = useState(board.starred);
  const [currTitle, setCurrTitle] = useState(board.boardName);
  const [visibility, setVisibility] = useState(board.visibility);

  const handleChangeTitle = (e) => {
    setCurrTitle(e.target.value);
  };

  const handleChangedTitle = (e) => {
    if (e.target.value === '') setCurrTitle(board.board);
    setChangeTitleBox(false);
  };

  return (
    <div className="pt-[52px] backdrop-blur-[6px] bg-[#0000003d]">
      <div className="flex justify-between p-[10px] flex-col md:flex-row">
        <div className="flex items-center gap-[1rem]">
          <div className="w-[25rem] overflow-hidden whitespace-nowrap justify-start mb-4 md:mb-0">
            {changeTitleBox ? (
              <Input
                style={{ color: 'white', textAlign: 'center' }}
                className="h-[3.2rem] text-[1.8rem] font-bold"
                onPressEnter={handleChangedTitle}
                onBlur={handleChangedTitle}
                onChange={handleChangeTitle}
                value={currTitle}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setChangeTitleBox(true)}
                className="text-[1.8rem] text-white font-bold leading-[3.2rem] text-center hover:bg-slate-600"
              >
                {currTitle}
              </div>
            )}
          </div>

          <div
            onClick={() => setFavorite((prev) => !prev)}
            className="p-[8px] rounded-[5px] hover:bg-slate-600 cursor-pointer"
          >
            {!favorite ? <AiOutlineStar color="white" /> : <AiFillStar color="yellow" />}
          </div>

          <ShareBoard creator={creator} members={members} />
        </div>

        <div className="flex items-center gap-[20px] justify-end">
          <Avatar.Group
            maxCount={3}
            size="medium"
            maxStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
            }}
          >
            <div className="relative">
              <UserDetail user={creator} showDetail={false} size={28} />
              <Tooltip title="This member is admin of this board" placement="bottom">
                <RiArrowUpDoubleLine className="absolute left-0 bottom-0 text-[blue] bg-white rounded-full" />
              </Tooltip>
            </div>
            {members.map((member) => (
              <UserDetail key={member.id} showDetail={false} size={28} user={member} />
            ))}
          </Avatar.Group>

          {/* <div className="p-[5px] rounded-[4px] hover:bg-[#8896a6] cursor-pointer">
            <span>Join board</span>
          </div> */}
          <VisibilityBtn visibility={visibility} setVisibility={setVisibility} />

          <Chat others={members} currentUser={users[0]} boardId={1} />

          <MoreBtn background={background} setBackground={setBackground} creator={creator} />
        </div>
      </div>
    </div>
  );
}

export default Header;
