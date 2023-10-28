import React from 'react';
import { RiShareBoxLine } from 'react-icons/ri';

import MyDropdown from '../../ui/MyDropdown';
import ButtonImage from '../../ui/ButtonImage';
import Button from '../../ui/Button';
import DarkModeToggle from '../../ui/DarkModeToggle';

const userData = {
  userSName: 'HT',
  userFName: 'To Phuoc Hung',
  userEmail: 'tphung21@fitus.edu.vn',
  userImage: '',
};

const UserSetting = () => {
  return (
    <MyDropdown
      hasChevron={false}
      placement="bottomRight"
      title={<img src="/default-user.jpg" alt="user" className="h-[24px] w-[24px] rounded-full" />}
      render={
        <div className="mt-4 rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
          <div className="flex flex-col border-b border-b-[--color-grey-400]">
            <span className="text-[--color-grey-500] font-medium p-4 text-[11px]">ACCOUNT</span>
            <div className="py-[8px] px-[10px] bg-inherit">
              <ButtonImage
                custom={
                  <img
                    src="/default-user.jpg"
                    alt="user"
                    className="h-[40px] w-[40px] rounded-full mr-[8px]"
                  />
                }
                title={userData.userFName}
                subscription={userData.userEmail}
                hasStarred={false}
                type="custom"
              />
            </div>
            <Button type="icon" classNames="text-start py-[8px]">
              Switch accounts
            </Button>
            <Button type="icon" classNames="flex justify-between items-center">
              <span>Manage account</span>
              <RiShareBoxLine color="var(--color-grey-500)" size={16} />
            </Button>
          </div>
          <div className="flex flex-col border-b border-b-[--color-grey-400]">
            <span className="text-[--color-grey-500] font-medium p-4 text-[11px]">TRELLO</span>
            <Button type="icon" classNames="text-start py-[8px]">
              Activity
            </Button>
            <Button type="icon" classNames="text-start py-[8px]">
              Setting
            </Button>
            <div className="flex justify-between items-center text-[--color-grey-500] text-[1.4rem] pl-[1.6rem] font-medium">
              <span>Theme</span>
              <DarkModeToggle />
            </div>
          </div>
          <Button type="icon" classNames="text-start py-[8px]">
            Log out
          </Button>
        </div>
      }
    />
  );
};

export default UserSetting;
