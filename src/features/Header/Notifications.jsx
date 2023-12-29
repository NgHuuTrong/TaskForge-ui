import React, { useState } from 'react';
import { Dropdown, Switch } from 'antd';
import { AiOutlineBell } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import EmailFrequency from './EmailFrequency';
import Notification from './Notification';
import Heading from '../../ui/Heading';
import notifications from '../../data/notifications.json';
import Button from '../../ui/Button';

const Notifications = () => {
  const [unreadOnly, setUnreadOnly] = useState(true);

  const handleClick = () => {
    setUnreadOnly(!unreadOnly);
  };

  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      openClassName="mt-12"
      placement="bottomRight"
      trigger={['click']}
      dropdownRender={() => (
        <div className="min-h-[20rem] w-[40rem]">
          <div className="flex items-center justify-between pl-[16px] pr-[10px] py-[22px] border-b border-b-[--color-grey-400]">
            <Heading as="h3">Notifications</Heading>
            <div className="flex items-center justify-evenly">
              <span className="flex items-center text-[12px]">
                Show unread only
                <Switch defaultChecked size="small" className="mx-4" onClick={handleClick} />
              </span>
              <EmailFrequency
                trigger={'click'}
                icon={<BiDotsVerticalRounded size={16} color="var(--color-grey-600)" />}
              />
            </div>
          </div>
          <div className="p-4">
            {notifications.map(
              (notification) =>
                ((unreadOnly && !notification.read) || !unreadOnly) && (
                  <Notification key={notification.id} item={notification} />
                ),
            )}
          </div>
        </div>
      )}
    >
      <Button type="icon" size="small" classNames="rounded-full">
        <AiOutlineBell color="var(--color-grey-500)" className="rotate-45 cursor-pointer text-[2.4rem]" />
      </Button>
    </Dropdown>
  );
};

export default Notifications;
