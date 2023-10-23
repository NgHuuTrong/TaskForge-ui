import React from 'react';
import { Dropdown, Space } from 'antd';
import projectImg from '../../assets/project.jpeg';
import { AiOutlineDown } from 'react-icons/ai';

const DropdownWorkspaces = ({ items, title }) => {
  items.sort((a, b) => {
    if (a.current === b.current) {
      return 0;
    } else if (a.current) {
      return -1;
    } else {
      return 1;
    }
  });
  function commonItem(item) {
    const { imageWorkspace, nameWorkspace } = item;
    return (
      <a href="/" className="my-2 flex items-center justify-center">
        <div className="mr-5 object-contain">
          <img
            src={imageWorkspace ? imageWorkspace : projectImg}
            alt={'img-bg'}
            className="h-14 w-14 rounded-lg bg-[--color-dark] bg-center object-cover"
          />
        </div>
        <div className="flex-[3]">
          <div className="font-semibold">{nameWorkspace}</div>
        </div>
      </a>
    );
  }
  const currentWorkspace = [
    {
      key: 'current',
      type: 'group',
      label: 'Current workspace',
      children: [
        {
          key: items.length + 2,
          label: commonItem(items[0]),
        },
      ],
    },
    {
      type: 'divider',
    },
  ];
  const menuProps = {
    items: [
      ...currentWorkspace,
      {
        key: 'your',
        type: 'group',
        label: 'Your workspaces',
        children: items.map((item) => {
          return {
            key: item.id,
            label: commonItem(item),
          };
        }),
      },
    ],
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={
            'mr-1 flex h-11 rounded p-2 text-lg font-semibold text-[--color-grey-500] hover:bg-[--color-grey-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
          }
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className="text-[1.3rem]">
              {title}
              <AiOutlineDown size={10} />
            </Space>
          </span>
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownWorkspaces;