import React from 'react';
import { Link } from 'react-router-dom';
import { TbTemplate, TbTable } from 'react-icons/tb';
import { MdOutlinePeopleOutline } from 'react-icons/md';

import MyDropdown from '../../ui/MyDropdown';
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

const CreateBtn = () => {
  return (
    <MyDropdown
      title="Create"
      type="primary"
      hasChevron={false}
      render={
        <div className="mt-4 w-[304px] rounded-xl bg-[--color-grey-0] py-3 border border-[--color-grey-300]">
          {items.map((item) => (
            <Link
              key={item.id}
              to="/"
              className="flex flex-col justify-center hover:bg-[--color-grey-200] px-[12px] py-[6px]"
            >
              <div className="flex items-center font-[400] text-[--color-grey-600]">
                {item.icon}
                <p className="ml-3">{item.title}</p>
              </div>
              <p className="text-[12px] text-[--color-grey-500] leading-[16px] mt-[4px]">
                {item.des}
              </p>
            </Link>
          ))}
        </div>
      }
    />
  );
};

export default CreateBtn;
