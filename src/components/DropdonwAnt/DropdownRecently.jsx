import React from 'react';
import { Dropdown, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';

const DropdownRecently = ({ items, title }) => {
  let menuProps = {
    items: items?.map((item, id) => {
      return {
        key: item.id,
        label: (
          <a href="/" className="flex items-center justify-center">
            <div className="flex-[1] object-contain">
              <img src={item.img} alt="image_alt" />
            </div>
            <div className="flex-[3]">
              <div>{item.title}</div>
              <div>{item.des}</div>
            </div>
          </a>
        ),
      };
    }),
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={
            'mr-1 flex h-11 rounded p-2 text-lg font-semibold text-[--color-grey-500] hover:bg-[--color-grey-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
          }
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className="">
              {title}
              <AiOutlineDown size={10} />
            </Space>
          </a>
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownRecently;
