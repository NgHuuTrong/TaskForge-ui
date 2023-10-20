import React from 'react';
import SidebarTab from '../../ui/SidebarTab';
import WorkspaceSection from '../../ui/WorkspaceSection';
import Row from '../../ui/Row';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from './sidebarSlice';
import { HiOutlineViewBoards, HiOutlineTemplate } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';


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
              to='/'
              icon={tab.icon}
              title={tab.title}
              type='main'
              selected={activeTab === tab.key}
            />
          </li>
          )
        }
      </ul>
      <div className='grow flex flex-col gap-[1rem] overflow-y-auto'>
        <Row classNames='text-[--color-grey-500] px-[1rem]'>
          <h3 className='text-[1.3rem] font-semibold'>Workspaces</h3>
          <div className='flex justify-center items-center hover:bg-[--color-grey-200] w-[2.3rem] h-[2.3rem] rounded-md'>
            <span className='text-[2.3rem] cursor-pointer'>+</span>
          </div>
        </Row>
        <WorkspaceSection name='CS300-Project' />
        <WorkspaceSection name='CS163-Project' />
      </div>
    </aside >
  );
}

export default Sidebar;
