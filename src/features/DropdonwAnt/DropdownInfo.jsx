import { Dropdown, Space } from 'antd';
import React, { useState } from 'react';
import { RiShareBoxLine } from 'react-icons/ri';
import { MdOutlineWeb } from 'react-icons/md';

const DropdownInfo = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState('invisible');
  const [selected, setSelected] = useState(1);

  const handleClick = () => {
    change === 'visible' ? setChange('invisible') : setChange('visible');
  };

  const handleMouseLeave = () => {
    setChange('invisible');
  };

  const handleMenuClick = (e) => {
    if (e.key === '') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setChange('invisible');
    setOpen(flag);
  };

  function commonItem(item) {
    const { title, link } = item;
    return (
      <a className="my-2 flex" href={link ? link : '/'}>
        {title}
      </a>
    );
  }
  const userData = {
    userSName: 'HT',
    userFName: 'To Phuoc Hung',
    userEmail: 'tphung21@fitus.edu.vn',
    userImage: '',
  };

  const topics = [
    {
      id: 1,
      icon: <MdOutlineWeb size={40} color="white" />,
      title: 'Bright Mode',
      selected: true,
    },
    {
      id: 2,
      icon: <MdOutlineWeb size={40} color="black" />,
      title: 'Dark Mode',
      selected: false,
    },
  ];
  const items = [
    {
      key: '1',
      type: 'group',
      label: <div className="my-3 font-semibold">Account</div>,
      children: [
        {
          key: '1-1',
          label: (
            <div className="my-2 flex items-center">
              <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-[--color-dark] text-[--color-grey-100]">
                <div className="">{userData.userSName}</div>
              </div>
              <div className={`flex flex-col justify-center`}>
                <div>{userData.userFName}</div>
                <div className="text-sm text-[--color-grey-500]">
                  {userData.userEmail}
                </div>
              </div>
            </div>
          ),
        },
        {
          key: '1-2',
          label: commonItem({ title: 'Switch Account', link: '/' }),
        },
        {
          key: '1-3',
          label: (
            <a className="my-2 flex items-center justify-between" href="/">
              Account Management
              <RiShareBoxLine />
            </a>
          ),
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      type: 'group',
      label: <div className="my-2 flex font-semibold">Trello</div>,
      children: [
        {
          key: '2-1',
          label: commonItem({ title: 'Profile and Display', link: '/' }),
        },
        {
          key: '2-2',
          label: commonItem({ title: 'Work', link: '/' }),
        },
        {
          key: '2-3',
          label: commonItem({ title: 'Card', link: '/' }),
        },
        {
          key: '2-4',
          label: commonItem({ title: 'Setting', link: '/' }),
        },
        {
          key: '2-5',
          label: (
            <div className="relative my-2 flex">
              <div
                onClick={handleClick}
                className="flex w-full overflow-hidden"
              >
                Topic
              </div>
              <div
                onMouseLeave={handleMouseLeave}
                className={`absolute right-[17rem] flex w-72 flex-col rounded-lg bg-[--color-grey-0] shadow-[5px_10px_18px_#888888] hover:cursor-default ${change}`}
              >
                {topics.map((topic) => {
                  return (
                    <div
                      key={topic.id}
                      className={`flex h-24 w-full items-center justify-evenly rounded-md p-5 font-medium hover:bg-[--color-grey-300] hover:text-[--header-button-txt-hovered] [transition:background.4s_ease-in-out]${topic.id === selected
                        ? 'bg-[--header-button-bg-hovered] hover:bg-[--header-button-bg-hovered]'
                        : ''
                        }`}
                        onClick={() => setSelected(topic.id)}
                    >
                      <input
                        type="checkbox"
                        checked={topic.id === selected}
                        onChange={() => setSelected(topic.id)}
                        className="flex-1 hover:cursor-pointer"
                      ></input>
                      <div className='flex flex-1 items-center justify-center rounded-xl bg-[--color-grey-200]'>
                        {topic.icon}
                      </div>
                      <div className="flex flex-[3] items-center justify-center">
                        {topic.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ),
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: commonItem({ title: 'Help', link: '/' }),
    },
    {
      key: '4',
      label: commonItem({ title: 'Shortcut', link: '/' }),
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: commonItem({ title: 'Log out', link: '/' }),
    },
  ];

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      menu={{ items, onClick: handleMenuClick }}
      trigger={['click']}
      arrow={true}
    >
      <button
        className={
          'ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-[--color-dark] p-2 text-sm font-semibold text-white hover:bg-[--color-grey-300] hover:text-[--color-dark] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
        }
      >
        <Space size={'small'}>
          {userData.userSName}
        </Space>
      </button>
    </Dropdown>
  );
};

export default DropdownInfo;
