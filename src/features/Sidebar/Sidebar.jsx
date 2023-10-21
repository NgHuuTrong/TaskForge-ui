import React from 'react';
import SidebarTab from '../../ui/SidebarTab';
import WorkspaceTab from '../../ui/WorkspaceTab';
import Row from '../../ui/Row';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from './sidebarSlice';
import { HiOutlineViewBoards, HiOutlineTemplate } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import Heading from '../../ui/Heading';


const tabs = [
  {
    icon: <HiOutlineViewBoards size='1.5rem' />,
    title: 'Boards',
    key: 'boards'
  },
  {
    icon: <HiOutlineTemplate size='1.5rem' />,
    title: 'Templates',
    key: 'templates'
  },
  {
    icon: <AiOutlineHome size='1.5rem' />,
    title: 'Home',
    key: 'home'
  }
];

function Sidebar() {
  const activeTab = useSelector(state => state.sidebar.activeTab);
  const dispatch = useDispatch();

  return (
    <aside className="hidden h-screen w-1/6 bg-[--color-grey-50] md:flex flex-col gap-[2rem] px-[0.6rem] py-[3.2rem]">
      <ul className='pb-[1rem] border-b'>
        {
          tabs.map(tab => <li
            className='mb-[0.25rem]'
            key={tab.key}
            onClick={() => dispatch(setActiveTab(tab.key))}
          >
            <SidebarTab
              to={'/' + tab.key}
              icon={tab.icon}
              title={tab.title}
              type='main'
              selected={activeTab === tab.key}
            />
          </li>
          )
        }
      </ul>
      <div className='grow flex flex-col gap-2 overflow-y-auto'>
        <Row classNames='text-[--color-grey-500] px-[1rem]'>
          <Heading className='text-[1.3rem] font-semibold' as='h5'>Workspaces</Heading>
          <div className='flex justify-center items-center hover:bg-[--color-grey-200] w-[2.3rem] h-[2.3rem] rounded-md'>
            <span className='text-[2.3rem] cursor-pointer'>+</span>
          </div>
        </Row>
        <WorkspaceTab name='CS300-Project' />
        <WorkspaceTab name='CS163-Project' />
      </div>
    </aside >
  );
}

export default Sidebar;
