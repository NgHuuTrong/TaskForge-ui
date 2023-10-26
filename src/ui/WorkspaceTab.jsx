import React, { useState } from 'react';
import { Avatar } from 'antd';
import SidebarTab from './SidebarTab';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/Sidebar/sidebarSlice';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiGearLight } from 'react-icons/pi';

const tabs = [
  {
    icon: <HiOutlineViewBoards />,
    title: 'Boards',
    link: '',
  },
  {
    icon: <AiOutlineHeart />,
    title: 'Highlights',
    link: '',
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Members',
    link: '/add-member',
  },
  {
    icon: <PiGearLight />,
    title: 'Settings',
    link: '',
  },
];

function WorkspaceTab({ name }) {
  const activeTab = useSelector((state) => state.sidebar.activeTab);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="mb-2 w-full">
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-xl px-[1rem] py-[0.25rem] font-medium text-[--color-grey-500] hover:bg-[--color-grey-200]"
        onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}
      >
        <div className="flex items-center gap-5 text-[1.4rem] font-semibold leading-[30px]">
          <Avatar
            className="z-0"
            shape="square"
            size="small"
            style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
          >
            C
          </Avatar>
          <span>{name}</span>
        </div>
        <div className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-md">
          {openDropdown ? (
            <FaAngleUp size="2rem" />
          ) : (
            <FaAngleDown size="2rem" />
          )}
        </div>
      </div>
      {openDropdown && (
        <ul className="mt-[1rem]">
          {tabs.map((tab) => {
            const key = name + '-' + tab.title;
            const { icon, title, link } = tab;
            return (
              <li
                className="mb-[0.25rem]"
                key={key}
                onClick={() => dispatch(setActiveTab(key))}
              >
                <SidebarTab
                  to={link ? link : ''}
                  icon={icon}
                  title={title}
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
