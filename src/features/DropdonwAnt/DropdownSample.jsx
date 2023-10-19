import React from 'react';
import { Dropdown, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';
import projectImg from '../../assets/project.jpeg';

const DropdownSample = ({ items, title }) => {
  function commonItem(item) {
    const { imageTemplate, nameTemplate } = item;
    return (
      <a href="/" className="my-2 flex items-center justify-center pr-5">
        <div className="mr-5 object-contain">
          <img
            src={imageTemplate ? imageTemplate : projectImg}
            alt={'img-bg'}
            className="h-14 w-14 rounded-lg bg-[--color-dark] bg-center object-cover"
          />
        </div>
        <div className="flex-[3]">
          <div>{nameTemplate}</div>
        </div>
      </a>
    );
  }

  const menuProps = {
    items: [
      {
        key: 'top',
        type: 'group',
        label: 'Top models',
        children: items.map((item) => {
          const { id } = item;
          return {
            key: id,
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
            'mr-4 flex h-11 rounded p-2 text-lg font-semibold text-[--color-grey-500] hover:bg-[--color-grey-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
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

export default DropdownSample;
