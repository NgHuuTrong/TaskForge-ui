import React, { useState } from 'react';
import SidebarTab from './SidebarTab';
import WorkspaceSection from './WorkspaceSection';

const tabs = [
  {
    icon: <i className="fa fa-table"></i>,
    title: 'Boards'
  },
  {
    icon: <i className="fab fa-buffer"></i>,
    title: 'Templates'
  },
  {
    icon: <i className="fa fa-home"></i>,
    title: 'Home'
  }
];

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState('Boards');

  return (
    <aside className="h-screen flex flex-col gap-[2rem] px-[0.6rem] py-[3.2rem]">
      <ul className='pb-[1rem] border-b'>
        {
          tabs.map(tab => <li
            className='mb-[0.25rem]'
            key={tab.title}
            onClick={() => setSelectedTab(tab.title)}
          >
            <SidebarTab
              to='/'
              icon={tab.icon}
              title={tab.title}
              size='medium'
              selected={selectedTab === tab.title}
            />
          </li>
          )
        }
      </ul>
      <div className='grow flex flex-col gap-[1rem] overflow-y-auto'>
        <div className='flex justify-between items-center text-[--color-grey-500] px-[1rem]'>
          <h3 className='text-[1.3rem] font-semibold'>Workspaces</h3>
          <div className='flex justify-center items-center hover:bg-[--color-grey-200] w-[2.3rem] h-[2.3rem] rounded-md'>
            <span className='text-[2.3rem] cursor-pointer'>+</span>
          </div>
        </div>
        <div>
          <WorkspaceSection name='CS300-Project' />
          <WorkspaceSection name='CS163-Project' />
        </div>
      </div>
    </aside >
  );
}

export default Sidebar;
