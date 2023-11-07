import React, { useState } from 'react';
import { TbTemplate, TbTable } from 'react-icons/tb';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import Modal from '../../ui/Modal';
import workspacebg from '../../assets/workspacebg.png';

import MyDropdown from '../../ui/MyDropdown';
import { Popover } from 'antd';
import CreateBoard from './CreateBoard';

const items = [
  {
    id: 1,
    icon: <TbTable />,
    title: 'Create board',
    des: 'A board is made up of cards arranged in a list. Use boards to manage projects, track information or organize just about anything.',
  },
  {
    id: 2,
    icon: <TbTemplate />,
    title: 'Start with a template',
    des: 'Get started faster with table templates.',
  },
  {
    id: 3,
    icon: <MdOutlinePeopleOutline />,
    title: 'Create a workspace',
    des: 'A workspace is a collection of boards and people. Use Workspaces to organize your company, support busy people, family or friends',
  },
];

function CreateBtn() {
  const [openCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useState(false);

  function renderItem({ id, icon, title, des }) {
    if (id === 1) {
      return <Popover
        placement="right"
        title={null}
        content={<CreateBoard />}
        trigger="click"
        overlayInnerStyle={{
          backgroundColor: 'var(--color-grey-0)',
          borderWidth: 2,
          borderColor: 'var(--color-grey-300)'
        }}
      >
        <ItemCreateBtn
          id={id}
          icon={icon}
          title={title}
          des={des}
        />
      </Popover >
    } else {
      return <ItemCreateBtn
        id={id}
        icon={icon}
        title={title}
        des={des}
        onClick={() => setOpenCreateWorkspaceModal(true)}
      />
    }
  }

  return (
    <>
      <Modal
        openModal={openCreateWorkspaceModal}
        setOpenModal={setOpenCreateWorkspaceModal}
        size={'large'}
        background={workspacebg}
      />
      <MyDropdown
        title="Create"
        type="primary"
        hasChevron={false}
        render={
          <div className="mt-4 w-[304px] rounded-xl bg-[--color-grey-0] py-3 border border-[--color-grey-300]">
            {items.map(renderItem)}
          </div>
        }
      />
    </>
  )
}

function ItemCreateBtn({ id, icon, title, des, onClick }) {
  return <div
    key={id}
    onClick={onClick}
    className="flex flex-col justify-center hover:bg-[--color-grey-200] px-[12px] py-[6px] cursor-pointer"
  >
    <div className="flex items-center font-[400] text-[--color-grey-600]">
      {icon}
      <p className="ml-3">{title}</p>
    </div>
    <p className="text-[12px] text-[--color-grey-500] leading-[16px] mt-[4px]">
      {des}
    </p>
  </div>
}

export default CreateBtn;
