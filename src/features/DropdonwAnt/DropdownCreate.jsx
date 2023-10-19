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
<<<<<<< HEAD
<<<<<<< HEAD
          {icon}
=======
          {icon === 'table' ? (
            <TbTable />
          ) : icon === 'template' ? (
            <TbTemplate />
          ) : icon === 'workspace' ? (
            <MdOutlinePeopleOutline />
          ) : (
            <></>
          )}
>>>>>>> b3b5137 (update dropdown components)
          <div className='ml-3'>{title}</div>
=======
          {icon}
          <div className="ml-3">{title}</div>
>>>>>>> 8e4db92 (update Header, DropdownAnt, index.css)
        </div>
        <div className="text-[0.9em]">{des}</div>
      </div>
    );
  }
  const items = [
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <TbTable />,
=======
      icon: 'table',
>>>>>>> b3b5137 (update dropdown components)
=======
      icon: <TbTable />,
>>>>>>> 8e4db92 (update Header, DropdownAnt, index.css)
      title: 'Create table',
      des: 'A board is made up of cards arranged in a list. Use boards to manage projects, track information or organize just about anything.',
    },
    {
      id: 2,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <TbTemplate />,
=======
      icon: 'template',
>>>>>>> b3b5137 (update dropdown components)
=======
      icon: <TbTemplate />,
>>>>>>> 8e4db92 (update Header, DropdownAnt, index.css)
      title: 'Start with a template',
      des: 'Get started faster with table templates.',
    },
    {
      id: 3,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <MdOutlinePeopleOutline />,
=======
      icon: 'workspace',
>>>>>>> b3b5137 (update dropdown components)
=======
      icon: <MdOutlinePeopleOutline />,
>>>>>>> 8e4db92 (update Header, DropdownAnt, index.css)
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
