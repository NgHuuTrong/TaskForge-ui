import React from 'react';
import { Dropdown, Space } from 'antd';
import { TbTemplate, TbTable } from 'react-icons/tb';
import { MdOutlinePeopleOutline } from 'react-icons/md';

const DropdownCreate = ({ title }) => {
  function commonItem(item) {
    const { icon, title, des } = item;
    return (
      <div href="/" className="my-2 flex max-w-md flex-col justify-center">
        <div className="flex flex-row items-center font-semibold">
          {icon}
          <div className='ml-3'>{title}</div>
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
    },
  ];

  const menuProps = {
    items: items.map((item) => {
      return {
        key: item.id,
        label: commonItem(item),
      };
    }),
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={
            'mr-1 flex h-11 rounded bg-[--header-button-txt-hovered] p-2 text-lg font-semibold text-[--color-grey-0] hover:bg-[--header-button-hovered-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
          }
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className="">
              {title}
            </Space>
          </a>
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownCreate;
