import { Dropdown, Space, Menu } from 'antd';
import React, { useState } from 'react';
import { Checkbox } from 'antd';

const DropdownInfo = () => {
  const [open, setOpen] = useState(false);

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
      key: '1',
      label: <div>Bright Mode</div>,
    },
    {
      key: '2',
      label: <div>Dark Mode</div>,
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
              <div className="flex flex-col justify-center">
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
            <div href="/">
              Account Management
              {/* icon */}
            </div>
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
            <div href="/">
              Profile and Display
              {/* icon */}
            </div>
          ),
        },
        {
          key: '2-2',
          label: (
            <div href="/">
              Work
              {/* icon */}
            </div>
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
            <Menu.SubMenu key="2-5" title="Topic">
              {topics.map((topic) => (
                <Menu.Item key={topic.key}>{topic.label}</Menu.Item>
              ))}
            </Menu.SubMenu>
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
    <>
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
    </>
  );
};

export default DropdownInfo;
