import React, { useEffect, useState } from 'react';
import { Dropdown, Switch } from 'antd';
import { AiOutlineBell } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import EmailFrequency from './EmailFrequency';
import Notification from './Notification';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import { useNotifications } from '../../hooks/useNotification';
import Spinner from '../../ui/Spinner';
import { useWebsocket } from '../../context/WebsocketContext';
import { useUser } from '../../hooks/useAuthenticate';

function Notifications() {
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [myNotifications, setMyNotifications] = useState([]);
  const [newNotificationSignal, setNewNotificationSignal] = useState(false);

  const { isLoading: isLoadingUser, user } = useUser();
  const { isLoading, notifications } = useNotifications();
  const { socket } = useWebsocket();

  useEffect(() => {
    setMyNotifications(notifications || []);
  }, [notifications]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected!');
    });
    socket.on(`notification-${user.id}`, (notification) => {
      setMyNotifications((myNotifications) => [notification, ...myNotifications]);
      setNewNotificationSignal(true);
    });
    return () => {
      console.log('Unregistering Events...');
      socket.off('connect');
      socket.off('notification-' + user?.id);
    };
  }, [socket, user]);

  const handleClick = () => {
    setUnreadOnly(!unreadOnly);
  };

  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      openClassName="mt-12"
      placement="bottomRight"
      trigger={['click']}
      onOpenChange={(value) => {
        if (!value && newNotificationSignal) {
          setNewNotificationSignal(false);
        }
      }}
      dropdownRender={() => {
        if (isLoading || isLoadingUser) return <Spinner />;
        return (
          <div className="min-h-[20rem] max-h-[80vh]] overflow-y-scroll w-[40rem]">
            <div className="flex items-center justify-between pl-[16px] pr-[10px] py-[22px] border-b border-b-[--color-grey-400]">
              <Heading as="h3">Notifications</Heading>
              <div className="flex items-center justify-evenly">
                <span className="flex items-center text-[12px]">
                  Show unread only
                  <Switch checked={unreadOnly} size="small" className="mx-4" onClick={handleClick} />
                </span>
                <EmailFrequency
                  trigger={'click'}
                  icon={<BiDotsVerticalRounded size={16} color="var(--color-grey-600)" />}
                />
              </div>
            </div>
            <div className="p-4">
              {myNotifications.map(
                (notification) =>
                  ((unreadOnly && !notification.isRead) || !unreadOnly) && (
                    <Notification key={notification.id} notification={notification} />
                  ),
              )}
            </div>
          </div>
        );
      }}
    >
      <Button type="icon" size="small" classNames="rounded-full relative">
        <AiOutlineBell color="var(--color-grey-500)" className="rotate-45 cursor-pointer text-[2.4rem]" />
        {newNotificationSignal && (
          <div className="bg-[--color-blue-700] w-[10px] h-[10px] rounded-full absolute top-[2px] right-[2px]" />
        )}
      </Button>
    </Dropdown>
  );
}

export default Notifications;
