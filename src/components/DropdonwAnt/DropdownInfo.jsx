import { Dropdown, Space } from 'antd';
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const DropdownWorkspaces = ({ type, items, title }) => {
  function commonItem(item) {
    return (
      <a href="/" className="flex items-center justify-center">
        <div className="flex-[1] object-contain">
          <img src={item.img} alt="image_alt" />
        </div>
        <div className="flex-[3]">
          <div>{item.title}</div>
          <div>{item.des}</div>
        </div>
      </a>
    );
  }
  const menuProps = {
    items: items?.map((item, id) => {
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
            'hover:text-[--color-dark] ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-[--color-dark] p-2 text-sm font-semibold text-white hover:bg-[--color-grey-300] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
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

export default DropdownWorkspaces;
