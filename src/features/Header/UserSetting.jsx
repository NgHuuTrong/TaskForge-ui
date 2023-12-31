import React from 'react';
import { RiShareBoxLine } from 'react-icons/ri';
import { Dropdown } from 'antd';

import Button from '../../ui/Button';
import DarkModeToggle from '../../ui/DarkModeToggle';
import UserDetail from '../../ui/UserDetail';
import users from '../../data/users.json';

const UserSetting = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      placement="bottomRight"
      trigger={['click']}
      dropdownRender={() => (
        <div>
          <div className="flex flex-col border-b border-b-[--color-grey-400]">
            <span className="font-medium p-4 text-[11px]">ACCOUNT</span>
            <div className="py-[8px] px-[10px] bg-inherit">
              <UserDetail user={users[0]} />
            </div>
            <Button type="icon" classNames="text-start [box-shadow:none] py-[8px]">
              Switch accounts
            </Button>
            <Button to="/u/settings" type="icon" classNames="flex justify-between items-center">
              <span>Manage account</span>
              <RiShareBoxLine color="var(--color-grey-500)" size={16} />
            </Button>
          </div>
          <div className="flex flex-col border-b border-b-[--color-grey-400]">
            <span className="font-medium p-4 text-[11px]">TRELLO</span>
            <Button type="icon" classNames="text-start [box-shadow:none] py-[8px]">
              Activity
            </Button>
            <Button type="icon" classNames="text-start [box-shadow:none] py-[8px]">
              Setting
            </Button>
            <div className="flex justify-between items-center text-[1.4rem] pl-[1.6rem] font-medium">
              <span>Theme</span>
              <DarkModeToggle />
            </div>
          </div>
          <Button type="icon" classNames="text-start [box-shadow:none] py-[8px]">
            Log out
          </Button>
        </div>
      )}
    >
      <Button type="text" size="small">
        <UserDetail showDetail={false} user={users[0]} size={24} hasTooltip={false} />
      </Button>
    </Dropdown>
  );
};

export default UserSetting;
