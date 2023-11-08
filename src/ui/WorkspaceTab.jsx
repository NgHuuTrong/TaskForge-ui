import React, { useState } from 'react';
import SidebarTab from './SidebarTab';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/Sidebar/sidebarSlice';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiGearLight } from 'react-icons/pi';
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
  const activeTab = useSelector((state) => state.sidebar.activeTab);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <div className="w-full mb-2">
      <div
        className="flex justify-between items-center font-medium w-full rounded-xl px-[1rem] py-[0.25rem] text-[--color-grey-500] hover:bg-[--color-grey-200] cursor-pointer"
        onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}
      >
        <div className="flex items-center gap-[0.8rem] text-[1.4rem] leading-[30px] font-semibold">
          <Logo size="small" bgImage="linear-gradient(#4bce97, #216e4e)">
            {workspace.workspaceName[0]}
          </Logo>
          <span>{workspace.workspaceName}</span>
        </div>
        <div className="flex justify-center items-center w-[2.3rem] h-[2.3rem] rounded-md">
          {openDropdown ? <FaAngleUp size="2rem" /> : <FaAngleDown size="2rem" />}
        </div>
      </div>
      {openDropdown && (
        <ul className="mt-[1rem]">
          {tabs.map((tab) => {
            const key = workspace.workspaceName + '-' + tab.title;
            return (
              <li className="mb-[0.25rem]" key={key} onClick={() => dispatch(setActiveTab(key))}>
                <SidebarTab
                  to={'/' + workspace.id + '/' + tab.key}
                  icon={tab.icon}
                  title={tab.title}
                  type="sub-workspace"
                  size="small"
                  selected={activeTab === key}
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
