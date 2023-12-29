import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiGearLight } from 'react-icons/pi';
import SidebarTab from './SidebarTab';
import Logo from './Logo';

const tabs = [
  {
    icon: <HiOutlineViewBoards />,
    title: 'Boards',
    key: 'home',
  },
  {
    icon: <AiOutlineHeart />,
    title: 'Highlights',
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Members',
    key: 'members',
  },
  {
    icon: <PiGearLight />,
    title: 'Settings',
  },
];

function WorkspaceTab({ workspace }) {
  const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <div className="w-full mb-2">
      <div
        className="flex justify-between items-center w-full rounded-xl px-[0.8rem] py-[0.6rem] hover:bg-[--color-grey-200] cursor-pointer"
        onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}
      >
        <div className="flex items-center gap-[0.8rem] text-[1.4rem] font-semibold">
          <Logo size="small" bgImage="linear-gradient(#4bce97, #216e4e)">
            {workspace.name[0]}
          </Logo>
          <span>{workspace.name}</span>
        </div>
        <div className="flex justify-center items-center rounded-md">
          {openDropdown ? <FaAngleUp size="2rem" /> : <FaAngleDown size="2rem" />}
        </div>
      </div>
      {openDropdown && (
        <ul className="mt-[1rem]">
          {tabs.map((tab) => {
            const key = workspace.name + '-' + tab.title;
            return (
              <li className="mb-[0.25rem]" key={key}>
                <SidebarTab
                  to={'/w/' + workspace.id + '/' + tab.key}
                  icon={tab.icon}
                  title={tab.title}
                  type="sub-workspace"
                  size="small"
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default WorkspaceTab;
