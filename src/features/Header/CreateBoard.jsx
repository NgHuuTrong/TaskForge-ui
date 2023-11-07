import React, { useState } from 'react';
import { IoIosArrowBack, IoMdClose, IoIosCheckmark, IoIosMore } from 'react-icons/io';
import { BsHandIndex } from 'react-icons/bs'
import { Popover, Input } from 'antd';

const backgroundImage = [
  {
    key: 1,
    backgroundPath: 'https://images.unsplash.com/photo-1696144706485-ff7825ec8481?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 2,
    backgroundPath: 'https://images.unsplash.com/photo-1696595883516-76c97aa3a164?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 3,
    backgroundPath: 'https://images.unsplash.com/photo-1697201826242-141dec817a6f?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 4,
    backgroundPath: 'https://images.unsplash.com/photo-1697577473134-46490cf51044?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 5,
    backgroundPath: 'https://images.unsplash.com/photo-1696837412004-cb6580ab1cc3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 6,
    backgroundPath: 'https://images.unsplash.com/photo-1697701859524-f4cc65e4747a?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const backgroundColor = [
  {
    key: 1,
    backgroundPath: 'https://trello.com/assets/707f35bc691220846678.svg',
  },
  {
    key: 2,
    backgroundPath: 'https://trello.com/assets/d106776cb297f000b1f4.svg',
  },
  {
    key: 3,
    backgroundPath: 'https://trello.com/assets/8ab3b35f3a786bb6cdac.svg',
  },
  {
    key: 4,
    backgroundPath: 'https://trello.com/assets/a7c521b94eb153008f2d.svg',
  },
  {
    key: 5,
    backgroundPath: 'https://trello.com/assets/aec98becb6d15a5fc95e.svg',
  },
  {
    key: 6,
    backgroundPath: 'https://trello.com/assets/b75536d1afb40980ca57.svg',
  }
]

function CreateBoard() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [backgroundType, setBackgroundType] = useState('image');
  const [titleBoard, setTitleBoard] = useState('');

  const PopoverHeader = (
    <div className='flex flex-row justify-center items-center'>
      <span className='text-[--color-grey-500] text-[14px] font-semibold mx-[10px]'>
        Board background
      </span>
    </div>
  );

  const renderBackgroundImageList = () => {
    return (
      backgroundImage.map((item) => (
        item.key < 5 && <div
          onClick={() => { setSelectedIndex(item.key); setBackgroundType('image') }}
          key={item.key} className='flex w-[64px] h-[40px] rounded-[3px]'
          style={{ backgroundImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
        >
          {selectedIndex === item.key && backgroundType === 'image' ?
            <div className='w-full h-full hover:cursor-pointer'>
              <div className='flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]'>
                <IoIosCheckmark size={30} color='white' />
              </div>
            </div> :
            <div className='w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]'>
            </div>}
        </div>
      ))
    )
  }

  const renderBackgroundColorList = () => {
    return (
      backgroundColor.map((item) => (
        item.key < 6 ?
          <div
            onClick={() => { setSelectedIndex(item.key); setBackgroundType('color') }}
            key={item.key} className='flex w-[40px] h-[32px] rounded-[3px]'
            style={{ backgroundImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
          >
            {selectedIndex === item.key && backgroundType === 'color' ?
              <div className='w-full h-full hover:cursor-pointer'>
                <div className='flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]'>
                  <IoIosCheckmark size={30} color='white' />
                </div>
              </div> :
              <div className='w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]'>
              </div>
            }
          </div> :
          <Popover
            key={item.key}
            className='flex justify-center items-center w-[40px] h-[32px] rounded-[3px] hover:bg-[--create-board-button-hovered]'
            arrow={false}
            placement="right" title={PopoverHeader} content={
              <PopoverContent selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} backgroundType={backgroundType} setBackgroundType={setBackgroundType} />
            }
            trigger="click"
            overlayInnerStyle={{
              backgroundColor: 'var(--color-grey-0)',
              borderWidth: 2,
              borderColor: 'var(--color-grey-300)'
            }}
          >
            <div className='bg-[--color-grey-300]'>
              <IoIosMore color='var(--color-grey-900)' size={24} />
            </div>
          </Popover>
      ))
    )
  }

  const handleChangeTextInput = (e) => {
    setTitleBoard(e.target.value);
  }

  return (
    <div className='w-[304px]'>
      <div onClick={() => { }} className='flex flex-row justify-between items-center p-[10px] border-b-[--color-grey-200] border-b-2'>
        <button className='p-[10px] rounded-[5px] text-[--color-grey-500]'>
          <IoIosArrowBack />
        </button>
        <div>
          <span className='text-[14px] text-[--color-grey-500] font-semibold'>
            Create Board
          </span>
        </div>
        <button onClick={() => { }} className='p-[10px] rounded-[5px] text-[--color-grey-500]'>
          <IoMdClose />
        </button>
      </div>

      <div className='p-[12px]'>

        <div className='flex justify-center'>
          <div
            className="flex justify-center w-[200px] h-[120px] bg-cover rounded-[3px]"
            style={{
              backgroundImage: backgroundType === 'image' ?
                `url(${backgroundImage[selectedIndex - 1].backgroundPath})` :
                `url(${backgroundColor[selectedIndex - 1].backgroundPath})`
            }}
          >
            <img className='p-[10px]' src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="/" />
          </div>
        </div>

        <div className='flex flex-col gap-[8px] mt-[16px]'>
          <span className='text-[12px] font-bold leading-[16px] text-[--color-grey-500]'>
            Background
          </span>
          <div className='flex flex-row justify-between'>
            {renderBackgroundImageList()}
          </div>
          <div className='flex flex-row justify-between'>
            {renderBackgroundColorList()}
          </div>
        </div>

        <div className='mt-[16px]'>
          <span className='text-[12px] font-bold leading-[16px] text-[--color-grey-500]'>
            Board title
          </span>
          <span className='text-[12px] font-bold leading-[16px] text-[red]'>*</span>
          <Input value={titleBoard} onChange={handleChangeTextInput} />
          <div className='flex flex-row items-center gap-[10px] py-[5px]'>
            <BsHandIndex color='yellow' />
            <p className='text-[14px] text-[--color-grey-500]'>
              Board title is required
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

function PopoverContent({ selectedIndex, setSelectedIndex, backgroundType, setBackgroundType }) {
  const renderPopoverBackgroundImageList = () => {
    return (
      backgroundImage.map((item) => (
        <div
          onClick={() => { setSelectedIndex(item.key); setBackgroundType('image') }}
          key={item.key} className='flex h-[56px] w-[31%] rounded-[3px]'
          style={{ backgroundImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
        >
          {
            selectedIndex === item.key && backgroundType === 'image' ?
              <div className='w-full h-full hover:cursor-pointer'>
                <div className='flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]'>
                  <IoIosCheckmark size={30} color='white' />
                </div>
              </div> :
              <div className='w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]'>
              </div>
          }
        </div>
      ))
    )
  }

  const renderPopoverBackgroundColorList = () => {
    return (
      backgroundColor.map((item) => (
        <div
          onClick={() => { setSelectedIndex(item.key); setBackgroundType('color') }}
          key={item.key} className='flex h-[56px] w-[31%] rounded-[3px]'
          style={{ backgroundImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
        >
          {
            selectedIndex === item.key && backgroundType === 'color' ?
              <div className='w-full h-full hover:cursor-pointer'>
                <div className='flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]'>
                  <IoIosCheckmark size={30} color='white' />
                </div>
              </div> :
              <div className='w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]'>
              </div>
          }
        </div>
      ))
    )
  }

  return (
    <div className='w-[304px]'>
      <div>
        <div className='my-[16px]'>
          <span className='text-[--color-grey-500] text-[14px] font-semibold my-[20px]'>Photos</span>
        </div>
        <div className='flex flex-wrap justify-between gap-[10px] w-full'>
          {renderPopoverBackgroundImageList()}
        </div>
      </div>
      <div>
        <div className=' my-[16px]'>
          <span className='text-[--color-grey-500] text-[14px] font-semibold'>Colors</span>
        </div>
        <div className='flex flex-wrap justify-between gap-[10px] w-full'>
          {renderPopoverBackgroundColorList()}
        </div>
      </div>
    </div>
  );
}

export default CreateBoard

