import React, { useState } from 'react';

const AddMember = () => {
  const [activated, setActivated] = useState(1);
  const tabs = [
    {
      id: 1,
      title: 'Workspace members',
      children: <div>Workspace children</div>,
    },
    {
      id: 2,
      title: 'Guests',
      children: <div></div>,
    },
    {
      id: 3,
      title: 'Requests',
      children: <div></div>,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex">Member</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>Member of Workspace tables</div>
          <div className="flex w-[30rem] flex-col">
            {tabs.map((tab, index) => {
              const { id, title } = tab;
              return (
                <button
                  key={index}
                  className={`flex h-11 w-[15rem] whitespace-nowrap items-center rounded-xl bg-[--color-grey-50] p-6 my-2 text-left text-lg leading-10 text-black transition-colors duration-500 hover:bg-[--color-grey-300]  ${
                    activated === id ? '' : ''
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex">
          {tabs.map((tab, index) => {
            const { id, children } = tab;
            if (id === activated) return <div key={index}>{children}</div>;
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddMember;
