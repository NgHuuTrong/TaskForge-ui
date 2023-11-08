import React from 'react';
import SidebarTab from '../../ui/SidebarTab';
import WorkspaceTab from '../../ui/WorkspaceTab';
import Row from '../../ui/Row';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from './sidebarSlice';
import { HiOutlineViewBoards, HiOutlineTemplate } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import Heading from '../../ui/Heading';

import workspaces from '../../data/workspaces.json';

const tabs = [
  {
    icon: <HiOutlineViewBoards size="1.5rem" />,
    title: 'Boards',
    key: 'boards',
  },
  {
    icon: <HiOutlineTemplate size="1.5rem" />,
    title: 'Templates',
    key: 'templates',
  },
  {
    icon: <AiOutlineHome size="1.5rem" />,
    title: 'Home',
    key: 'home',
  },
];

function Sidebar() {
  // const activeTab = useSelector((state) => state.sidebar.activeTab);
  const dispatch = useDispatch();

  return (
    <aside className="sticky top-[40px] mt-[40px] hidden max-h-[90vh] w-[288px] flex-col bg-[--color-grey-50] px-[16px] md:flex">
      <ul className="border-b py-[1rem]">
        {tabs.map((tab) => (
          <li className="mb-[0.25rem]" key={tab.key} onClick={() => dispatch(setActiveTab(tab.key))}>
            <SidebarTab
              to={'/' + tab.key}
              icon={tab.icon}
              title={tab.title}
              type="main"
              // selected={activeTab === tab.key}
            />
          </li>
        ))}
      </ul>
      <div className="flex grow flex-col gap-2 overflow-y-auto">
        <Row classNames="text-[--color-grey-500] p-[1rem]">
          <Heading className="text-[1.3rem] font-semibold" as="h5">
            Workspaces
          </Heading>
          <div className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-md hover:bg-[--color-grey-200]">
            <span className="cursor-pointer text-[2.3rem]">+</span>
          </div>
        </Row>
        {workspaces.map((workspace) => (
          <WorkspaceTab key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
