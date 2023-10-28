import React, { useState } from 'react';
import { Switch } from 'antd';
import { AiOutlineBell } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import EmailFrequency from './EmailFrequency';
import Notification from './Notification';
import Heading from '../../ui/Heading';
import MyDropdown from '../../ui/MyDropdown';

import notifications from '../../data/notifications.json';

const Notifications = () => {
  const [unreadOnly, setUnreadOnly] = useState(true);

  const handleClick = () => {
    setUnreadOnly(!unreadOnly);
  };

  return (
    <MyDropdown
      placement="bottomRight"
      trigger={['click']}
      render={
        <div className="min-h-[20rem] w-[40rem] rounded-xl bg-[--color-grey-0] border border-[--color-grey-300]">
          <div className="flex items-center justify-between pl-[16px] pr-[10px] py-[22px] border-b border-b-[--color-grey-400]">
            <Heading as="h3">Notifications</Heading>
            <div className="flex items-center justify-evenly">
              <div className="flex items-center text-[12px] text-[--color-grey-500]">
                Show unread only
                <Switch defaultChecked size="small" className="mx-4" onClick={handleClick} />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[--color-grey-300] hover:text-[--header-button-txt-hovered]">
                <EmailFrequency
                  trigger={'click'}
                  icon={<BiDotsVerticalRounded size={16} color="var(--color-grey-600)" />}
                />
              </div>
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
      }
      title={<AiOutlineBell className="rotate-45 cursor-pointer text-[2.4rem]" />}
      hasChevron={false}
    />
  );
};

export default Notifications;
