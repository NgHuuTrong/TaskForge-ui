import React, { useState } from 'react';
import UserDetail from '../../ui/UserDetail';
import { MdOutlineGroup } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { Radio, Tooltip } from 'antd';
import { useReadNotification } from '../../hooks/useNotification';

function Notification({ notification }) {
  const [isRead, setUnread] = useState(notification?.isRead);

  const { isUpdating, mutate: readNotification } = useReadNotification();

  function renderNotificationName() {
    switch (notification.type) {
      case 'ADD_ADMIN':
        return notification?.workspace?.name;
      case 'REMOVE_WORKSPACE':
        return notification?.workspace?.name;
      case 'ASSIGNMENT':
        return notification?.card?.title;
      case 'COMMENT':
        return notification?.card?.title;
      case 'ADD_TO_BOARD':
        return notification?.board?.name;
      default:
        return '';
    }
  }

  function renderNotificationContent() {
    switch (notification.type) {
      case 'ADD_ADMIN':
        return <span className='text-[1.4rem]'>changed you to be Admin of workspace <Link className='cursor-pointer text-[--color-blue-700]' to='/'>
          {notification?.workspace?.name}
        </Link>
          <span className='text-[1.3rem] text-[--color-grey-600] ml-[0.5rem]'>{format(notification?.createdAt)}</span>
        </span>
      case 'REMOVE_WORKSPACE':
        return <span className='text-[1.4rem]'>removed you out of workspace <Link className='cursor-pointer text-[--color-blue-700]' to='/'>
          {notification?.workspace?.name}
        </Link>
          <span className='text-[1.3rem] text-[--color-grey-600] ml-[0.5rem]'>{format(notification?.createdAt)}</span>
        </span>
      case 'ASSIGNMENT':
        return <span className='text-[1.4rem]'>assigned you to the task <Link className='cursor-pointer text-[--color-blue-700]' to={`/b/${notification?.card?.list?.boardId}/board-detail`}>
          {notification?.card?.title}
        </Link>
          <span className='text-[1.3rem] text-[--color-grey-600] ml-[0.5rem]'>{format(notification?.createdAt)}</span>
        </span>
      case 'COMMENT':
        return <span className='text-[1.4rem]'>commented on the task <Link className='cursor-pointer text-[--color-blue-700]' to={`/b/${notification?.card?.list?.boardId}/board-detail`}>
          {notification?.card?.title}
        </Link>
          <span className='text-[1.3rem] text-[--color-grey-600] ml-[0.5rem]'>{format(notification?.createdAt)}</span>
        </span>
      case 'ADD_TO_BOARD':
        return <span className='text-[1.4rem]'>added you to the board <Link className='cursor-pointer text-[--color-blue-700]' to={`/b/${notification?.board?.id}/board-detail`}>
          {notification?.board?.name}
        </Link>
          <span className='text-[1.3rem] text-[--color-grey-600] ml-[0.5rem]'>{format(notification?.createdAt)}</span>
        </span>
      default:
        return '';
    }
  }

  return (
    <div className="rounded-xl border-2 overflow-hidden shadow-sm mb-[1rem]">
      <div className='flex items-center justify-between bg-[--color-grey-0] p-[1rem]'>
        <div className='flex items-center gap-[0.5rem] text-[1.5rem]'>
          <MdOutlineGroup className='text-[1.8rem]' /> <span>{renderNotificationName()}</span>
        </div>
        <Tooltip placement="bottom" title={notification?.isRead ? "Mark unread" : "Mark read"}>
          <Radio
            checked={!isRead} onClick={(e) => {
              setUnread(!isRead);
              if (notification.id) {
                readNotification({ notificationId: notification.id, body: { isRead: !isRead } })
              }
            }}
            disabled={isUpdating}
          />
        </Tooltip>
      </div>
      <div className='grid grid-cols-12 bg-[--color-grey-100] px-[1rem] py-[1.5rem]'>
        <span className='col-span-1 flex items-center'>
          <UserDetail user={notification?.sender} showDetail={false} size={24} />
        </span>
        <div className='col-span-11 flex items-center'>
          <span className='font-bold text-[1.6rem] text-[--color-grey-800]'>{notification?.sender?.name}</span>
        </div>
        <div className='col-span-1'>
        </div>
        <div className='col-span-11'>{renderNotificationContent()}</div>
      </div>
    </div>
  );
}

export default Notification;
