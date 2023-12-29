import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

// import recents from '../../data/recent.json';
// import ButtonImage from '../../ui/ButtonImage';
import Button from '../../ui/Button';
import chats from '../../data/chats.json';
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji';

const Chat = ({ others, currentUser, boardId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [showTimestamp, setShowTimestamp] = useState(false);

  useEffect(() => {
    try {
      setMessages(chats);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // console.log(scroll.cur)
    if (openModal) scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [openModal]);

  const handleSubmit = async (e) => {
    const message = {
      id: Date.now(),
      senderId: currentUser.id,
      message: newMessage,
      boardId: boardId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    // const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    // setSendMessage({ ...message, receiverId: userData._id });
    // send message to database
    try {
      // const { data } = await addMessage(message);
      setMessages([...messages, message]);
      setNewMessage('');
    } catch {
      console.log('error');
    }
  };

  const scroll = useRef();
  const imageRef = useRef();

  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      onOpenChange={() => setOpenModal(!openModal)}
      dropdownRender={() => (
        <>
          {messages ? (
            <div className="w-[420px] pr-[1rem] h-[450px]">
              {messages.map((message, id) => {
                const sentByMe = message.senderId === currentUser.id;
                const sender = others.find((user) => user.id === message.senderId);
                return (
                  <div key={id} className="my-4">
                    <div className={`w-full flex text-base ${sentByMe ? 'flex-row-reverse pr-[4rem]' : 'pl-[4rem]'}`}>
                      {sentByMe ? currentUser.name : sender.name}
                    </div>
                    <div className={`w-full flex py-2 ${sentByMe ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex w-[4rem] justify-center pt-2`}>
                        <img src="https://picsum.photos/300" alt="avt" className="rounded-full w-[2.7rem] h-[2.7rem]" />
                      </div>
                      <div className={`flex max-w-[35rem] relative group`}>
                        <div className={`flex w-full relative ${sentByMe ? 'flex-row-reverse' : ''}`}>
                          <div
                            className={`flex text-ellipsis rounded-3xl ${
                              sentByMe ? 'bg-[--color-brand-600] text-white' : 'bg-[--color-grey-200]'
                            } px-5 py-2 overflow-hidden relative z-10 max-w-[25rem]`}
                            onMouseEnter={() => setShowTimestamp(message.id)}
                            onMouseLeave={() => setShowTimestamp(null)}
                          >
                            {message.message}
                          </div>
                          <div className="flex">
                            <div
                              className={`flex max-w-[8rem] h-[1.6rem] mt-2 justify-center items-center aspect-squaregroup-hover:inline-block text-[0.8rem] mx-3 p-[0.2rem] bg-slate-500 text-white rounded transition-opacity duration-500 ${
                                showTimestamp === message.id ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              {format(message.createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ref={scroll}></div>
                  </div>
                );
              })}
              {/* chat-sender */}
              <form onSubmit={handleSubmit}>
                <div className="chat-sender">
                  <div onClick={() => imageRef.current.click()}></div>
                  <InputEmoji
                    value={newMessage}
                    onChange={(e) => setNewMessage(e)}
                    onEnter={handleSubmit}
                    placeholder="Enter a message"
                  />
                  <input type="file" name="" id="" style={{ display: 'none' }} ref={imageRef} />
                </div>
              </form>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    >
      <Button size="normal" type="icon" classNames="hover:bg-slate-600">
        <WechatOutlined style={{ fontSize: '18px' }} />
      </Button>
    </Dropdown>
  );
};

export default Chat;
