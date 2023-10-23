import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import projectImg from '../../assets/project.jpeg';
import { AiFillStar, AiOutlineDown, AiOutlineStar } from 'react-icons/ai';

const DropdownStarred = ({ items, title }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const handleClickStar = () => {
    // set starred = false 
  }
  const result = items.flatMap((item) =>
    item.projects
      .filter((project) => project.starred === true)
      .map((project) => ({
        nameWorkspace: item.nameWorkspace,
        project: project,
      })),
  );

  function commonItem(item) {
    const { nameWorkspace, project } = item;
    const { imageProject, nameProject } = project;

    return (
      <div className="my-2 flex items-center justify-center pr-5">
        <a href='/' className='flex'>
          <div className="mr-5 object-contain">
            <img
              src={imageProject ? imageProject : projectImg}
              alt={'img-bg'}
              className="h-14 w-14 rounded-lg bg-[--color-dark] bg-center object-cover"
            />
          </div>
          <div className="mr-4">
            <div className="font-semibold">{nameProject}</div>
            <div className="text-[0.8em] text-[--color-grey-400]">
              {nameWorkspace}
            </div>
          </div>
        </a>
        <div className="group ml-4 flex items-center justify-center">
          <AiFillStar
            size={16}
            color="#E2B204"
            className="absolute bottom-auto top-auto group-hover:opacity-0"
          />
          <AiOutlineStar
            size={16}
            color="#E2B204"
            className="absolute opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    );
  }

  const menuProps = {
    items: result.map((item) => {
      return {
        key: item.id,
        label: commonItem(item),
      };
    }),
  };

  return (
    <>
      <Dropdown
        open={open}
        onOpenChange={handleOpenChange}
        menu={menuProps}
        trigger={['click']}
        arrow={true}
      >
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

export default DropdownStarred;
