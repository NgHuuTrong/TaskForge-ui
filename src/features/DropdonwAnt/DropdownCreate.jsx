import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { TbTemplate, TbTable } from 'react-icons/tb';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import Modal from '../../ui/Modal';
import workspacebg from '../../assets/workspacebg.png'


const DropdownCreate = ({ title }) => {
  const [openModal, setOpenModal] = useState(false);
  function CommonItem(item) {
    const { icon, title, des } = item;
    return (
      <div
        className="my-2 flex max-w-md flex-col justify-center"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex flex-row items-center font-semibold">
          {icon}
          <div className="ml-3">{title}</div>
        </div>
        <div className="text-[0.9em]">{des}</div>
      </div>
    );
  }
  const items = [
    {
      id: 1,
      icon: <TbTable />,
      title: 'Create table',
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
      modal: <Modal />,
    },
  ];

  const menuProps = {
    items: items.map((item) => {
      return {
        key: item.id,
        label: CommonItem(item),
      };
    }),
  };

  return (
    <>
      <div>
        <Modal openModal={openModal} setOpenModal={setOpenModal} size={'large'} background={workspacebg} />
      </div>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={
            'mr-1 flex h-11 rounded bg-[--header-button-txt-hovered] p-2 text-lg font-semibold text-[--color-grey-0] hover:bg-[--header-button-hovered-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
          }
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className="text-[1.3rem]">
              {title}
            </Space>
          </span>
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownCreate;
