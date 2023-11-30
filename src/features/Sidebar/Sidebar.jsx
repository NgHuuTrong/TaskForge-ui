import React, { useState } from 'react';
import { Modal } from 'antd';
import { HiOutlineViewBoards, HiOutlineTemplate } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';

import SidebarTab from '../../ui/SidebarTab';
import WorkspaceTab from '../../ui/WorkspaceTab';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import CreateWorkspace from '../../ui/CreateWorkspace';
import workspaces from '../../data/workspaces.json';

const tabs = [
  {
    icon: <HiOutlineViewBoards size="1.6rem" />,
    title: 'Boards',
    key: 'boards',
  },
  {
    icon: <HiOutlineTemplate size="1.6rem" />,
    title: 'Templates',
    key: 'templates',
  },
  {
    icon: <AiOutlineHome size="1.6rem" />,
    title: 'Home',
    key: 'home',
  },
];

function Sidebar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <aside className="sticky top-[40px] mt-[40px] hidden max-h-[90vh] w-[288px] flex-col bg-[--color-grey-50] px-[1rem] md:block overflow-y-auto">
      <ul className="border-b py-[1rem]">
        {tabs.map((tab) => (
          <li className="mb-[0.25rem]" key={tab.key}>
            <SidebarTab to={'/' + tab.key} icon={tab.icon} title={tab.title} type="main" />
          </li>
        ))}
      </ul>
      <div className="flex grow flex-col gap-2">
        <Row classNames="p-[1rem]">
          <span className="text-[1.4rem] font-semibold">Workspaces</span>
          <Button type="icon" size="small" onClick={() => setOpenModal(true)}>
            <span className="text-[2.0rem] font-bold">+</span>
          </Button>
          <Modal centered open={openModal} width={1200} footer={false} onCancel={() => setOpenModal(false)}>
            <CreateWorkspace />
          </Modal>
        </Row>
        {workspaces.map((workspace) => (
          <WorkspaceTab key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
