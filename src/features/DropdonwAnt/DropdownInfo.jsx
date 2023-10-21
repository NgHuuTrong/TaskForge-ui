import { Dropdown, Space } from 'antd';
import React, { useState, useEffect } from 'react';

const DropdownInfo = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState('invisible');
  const [selected, setSelected] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    change === 'visible' ? setChange('invisible') : setChange('visible');
  };

  const handleSelected = (e, select) => {
    setSelected(select);
  };

  const handleMenuClick = (e) => {
    if (e.key === '') {
      setOpen(false);
      console.log(open);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const userData = {
    userSName: 'HT',
    userFName: 'To Phuoc Hung',
    userEmail: 'tphung21@fitus.edu.vn',
    userImage: '',
  };

  const topics = [
    {
      id: 1,
      imageUrl: 'https://trello.com/assets/a3a279edd7e5baaef4f7.svg',
      title: 'Bright Mode',
      selected: true,
    },
    {
      id: 2,
      imageUrl: 'https://trello.com/assets/cb4097b01b57e5d91727.svg',
      title: 'Dark Mode',
      selected: false,
    },
  ];
  const items = [
    {
      key: '1',
      type: 'group',
      label: <div className="font-semibold">Account</div>,
      children: [
        {
          key: '1-1',
          label: (
            <div className="flex items-center">
              <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-[--color-dark] text-[--color-grey-100]">
                <div className="">{userData.userSName}</div>
              </div>
              <div className={`flex flex-col justify-center`}>
                <div>{userData.userFName}</div>
                <div>{userData.userEmail}</div>
              </div>
            </div>
          ),
        },
        {
          key: '1-2',
          label: (
            <a href="/">
              Switch Account
              {/* icon */}
            </a>
          ),
        },
        {
          key: '1-3',
          label: (
            <a href="/">
              Account Management
              {/* icon */}
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
      label: <div className="font-semibold">Trello</div>,
      children: [
        {
          key: '2-1',
          label: (
            <a href="/">
              Profile and Display
              {/* icon */}
            </a>
          ),
        },
        {
          key: '2-2',
          label: (
            <a href="/">
              Work
              {/* icon */}
            </a>
          ),
        },
        {
          key: '2-3',
          label: (
            <a href="/">
              Card
              {/* icon */}
            </a>
          ),
        },
        {
          key: '2-4',
          label: (
            <a href="/">
              Setting
              {/* icon */}
            </a>
          ),
        },
        {
          key: '2-5',
          label: (
            <div className="relative flex">
              <div
                onClick={handleClick}
                className="flex w-full overflow-hidden"
              >
                Topic
              </div>
              <div
                className={`absolute right-80 flex w-72 flex-col rounded-lg bg-[--color-grey-0] shadow-2xl ${change}`}
              >
                {topics.map((topic) => {
                  return (
                    <div
                      key={topic.id}
                      className={`flex w-full items-center justify-evenly rounded-md p-5 font-medium hover:bg-[--color-grey-300] hover:text-[--header-button-txt-hovered] ${
                        topic.id === selected
                          ? 'bg-[--header-button-bg-hovered]'
                          : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        onClick={() => setSelected(topic.id)}
                      ></input>
                      <div
                        className={`h-16 w-20 rounded-xl bg-center object-contain bg-[url(${topic.imageUrl})]`}
                      ></div>
                      <div className="flex">{topic.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ),
        },
      ],
    },
  ];

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
        <Space size={'small'} className="">
          {userData.userSName}
        </Space>
      </button>
    </Dropdown>
  );
};

export default DropdownInfo;
