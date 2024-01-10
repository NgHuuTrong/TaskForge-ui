import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from 'antd';
import { PiWechatLogo } from 'react-icons/pi';

import Button from '../../ui/Button';
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji';
import { useWebsocket } from '../../context/WebsocketContext';
import UserDetail from '../../ui/UserDetail';
import { useMessages } from '../../hooks/useMessage';
import Spinner from '../../ui/Spinner';

const Chat = ({ curMember, boardId }) => {
  const { data, isLoading } = useMessages();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const scroll = useRef();
  const imageRef = useRef();
  const { socket } = useWebsocket();

  useEffect(() => {
    setMessages(data || []);
  }, [data]);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected!');
    });
    socket.on('message-' + boardId, (newMessage) => {
      console.log('sendMessage event received!');
      console.log(newMessage);
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => {
      console.log('Unregistering Events...');
      socket.off('connect');
      socket.off('message-' + boardId);
    };
  }, [socket, boardId]);

  useEffect(() => {
    if (openModal) scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [openModal]);

  if (isLoading) return <Spinner />;
  const handleSubmit = async () => {
    socket.emit('sendMessage', { content: newMessage, boardId });
    setNewMessage('');
  };

  return (
    <Dropdown
      onOpenChange={() => setOpenModal(!openModal)}
      open={openModal}
      overlayStyle={{ paddingBottom: 0 }}
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[40rem] max-h-[70vh] relative">
          {messages.length ? (
            <>
              {messages.map((message) => {
                const sentByMe = message.userId === curMember.userId;
                return (
                  <div key={message.id} className="my-4">
                    <div className={`w-full flex text-base ${sentByMe ? 'flex-row-reverse pr-[4rem]' : 'pl-[4rem]'}`}>
                      {message.sender.name}
                    </div>
                    <div className={`w-full flex py-2 ${sentByMe ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex w-[4rem] justify-center pt-2`}>
                        <UserDetail user={message.sender} showDetail={false} size="2.6rem" />
                      </div>
                      <div className={`flex max-w-[35rem] relative group`}>
                        <div className={`flex w-full relative ${sentByMe ? 'flex-row-reverse' : ''}`}>
                          <div
                            className={`flex text-ellipsis rounded-3xl ${
                              sentByMe ? 'bg-[--color-brand-600] text-white' : 'bg-[--color-grey-200]'
                            } px-5 py-2 overflow-hidden relative z-10 max-w-[25rem]`}
                          >
                            {message.content}
                          </div>
                          <div className="flex max-w-[8rem] h-[1.6rem] mt-2 justify-center items-center aspect-squaregroup-hover:inline-block text-[0.8rem] mx-3 p-[0.2rem] bg-slate-500 text-white rounded transition-opacity duration-500">
                            {format(message.createdAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ref={scroll}></div>
                  </div>
                );
              })}
            </>
          ) : (
            <div>No Messages</div>
          )}
          {/* chat-sender */}
          <form onSubmit={handleSubmit} className="sticky bottom-0 left-0 w-full z-10 bg-[--color-grey-0]">
            <div onClick={() => imageRef.current.click()}></div>
            <InputEmoji
              value={newMessage}
              onChange={(e) => setNewMessage(e)}
              onEnter={handleSubmit}
              placeholder="Enter a message"
            />
            <input type="file" name="" id="" style={{ display: 'none' }} ref={imageRef} />
          </form>
        </div>
      )}
    >
      <Button size="normal" type="icon">
        <PiWechatLogo style={{ fontSize: '18px' }} color="#fff" />
      </Button>
    </Dropdown>
  );
};

export default Chat;
