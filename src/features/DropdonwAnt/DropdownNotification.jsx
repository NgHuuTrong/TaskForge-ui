import React, { useState } from 'react';
import { Dropdown, Space, Divider, Switch } from 'antd';
import { AiOutlineBell } from 'react-icons/ai';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import DropdownItem from './DropdownItem';
import Notification from './Notification';

const DropdonwnNotification = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [unreadOnly, setUnreadOnly] = useState(true);

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const handleClick = () => {
    setUnreadOnly(!unreadOnly);
  };

  return (
    <>
      <Dropdown
        trigger={['click']}
        arrow={true}
        open={open}
        onOpenChange={handleOpenChange}
        dropdownRender={(menu) => (
          <div className="min-h-[20rem] w-[40rem] rounded-xl bg-white shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-3xl font-semibold">Notification</div>
                <div className="flex items-center justify-evenly">
                  <div className="flex items-center text-sm text-[--color-grey-500]">
                    Show unread only
                    <Switch
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      defaultChecked
                      size="small"
                      className="mx-4"
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[--color-grey-300] hover:text-[--header-button-txt-hovered]">
                    <DropdownItem
                      trigger={'click'}
                      icon={<BiDotsVerticalRounded size={22} />}
                    />
                  </div>
                </div>
              </div>
              <Divider />
              <div>
                <div>
                  {items?.map((item) => {
                    const { read } = item;
                    if ((unreadOnly && !read) || !unreadOnly)
                      return <Notification key={item.id} item={item} />;
                    else return <></>;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={
            'flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-[--color-grey-300]'
          }
        >
          <div>
            <Space size={'small'} className="flex items-center justify-center">
              <AiOutlineBell className="rotate-45 cursor-pointer text-[2rem]" />
            </Space>
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default DropdonwnNotification;
