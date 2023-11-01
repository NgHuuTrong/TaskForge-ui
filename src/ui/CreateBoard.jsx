import React, { useState } from 'react';
import { IoIosArrowBack, IoMdClose, IoIosCheckmark, IoIosMore } from 'react-icons/io';
import { BsHandIndex, BsPeople } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { Popover, Input, Select, Space, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;

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

const workspace = [
  {
    title: 'Workspace 1',
    key: '1',
    children: [
      {
        title: 'Board 1-1',
        key: '1-1',
      },
      {
        title: 'Board 1-2',
        key: '1-2',
      }
    ]
  },
  {
    title: 'Workspace 2',
    key: '2',
    children: [
      {
        title: 'Board 2-1',
        key: '2-1',
      },
      {
        title: 'Board 2-2',
        key: '2-2',
      }
    ]
  }
]

function CreateBoard() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspace ? workspace[0].title : '');
  const [backgroundType, setBackgroundType] = useState('image');
  const [titleBoard, setTitleBoard] = useState('');
  const [inputStatus, setInputStatus] = useState('error');

  const PopoverHeader = (
    <div className='flex flex-row justify-center items-center'>
      <span className='text-[#44546f] text-[14px] font-semibold mx-[10px]'>
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
              </div>}
          </div> :
          <Popover
            key={item.key}
            className='flex justify-center items-center w-[40px] h-[32px] bg-[--color-grey-200] rounded-[3px] hover:bg-[--create-board-button-hovered]'
            arrow={false}
            placement="right" title={PopoverHeader} content={
              <PopoverContent selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} backgroundType={backgroundType} setBackgroundType={setBackgroundType} />
            }
            trigger="click"
          >
            <IoIosMore size={24} />
          </Popover>
      ))
    )
  }

  const handleChangeTextInput = (e) => {
    setTitleBoard(e.target.value);
    if (e.target.value != '') setInputStatus('none');
    else setInputStatus('error')
  }

  return (
    <div className='w-[304px] shadow-md border'>

      <div onClick={() => { }} className='flex flex-row justify-between items-center p-[10px]'>
        <div onClick={() => {}} className='p-[10px] rounded-[5px] hover:bg-[#dcdfe4]'>
          <IoIosArrowBack />
        </div>
        <div>
          <span className='text-[#44546f] text-[14px] font-semibold'>
            Create Board
          </span>
        </div>
        <div onClick={() => { }} className='p-[10px] rounded-[5px] hover:bg-[#dcdfe4]'>
          <IoMdClose />
        </div>
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
          <span className='text-[12px] font-bold leading-[16px]'>
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
          <span className='text-[12px] font-bold leading-[16px]'>
            Board title
          </span>
          <span className='text-[12px] font-bold leading-[16px] text-[red]'>*</span>
          <Input status={inputStatus} value={titleBoard} onChange={handleChangeTextInput} />
          <div className='flex flex-row items-center gap-[10px] py-[5px]'>
            <BsHandIndex />
            <p className='text-[14px]'>
              Board title is required
            </p>
          </div>
        </div>

        <div className='mt-[8px]'>
          <div>
            <span className='text-[12px] font-bold leading-[16px]'>
              Workspace
            </span>
          </div>
          <div>
            <Select
              defaultValue={workspace != null ? workspace[0].title : ''}
              style={{
                width: '100%'
              }}
              onChange={(value) => setSelectedWorkspace(value)}
              options={workspace.map((item) => {
                return { value: item.title }
              })}
            />
          </div>
        </div>

        <div className='mt-[8px]'>
          <div>
            <span className='text-[12px] font-bold leading-[16px]'>
              Visibility
            </span>
          </div>
          <div>
            <Select
              defaultValue='Private'
              style={{
                width: '100%'
              }}
              onChange={{}}
              optionLabelProp='value'
              options={[
                {
                  value: 'Private', 
                  label:
                  <Tooltip title="Only board members can see and edit this board.">
                    <Space>
                      <AiOutlineLock/>
                      <span>Private</span>
                    </Space>
                  </Tooltip>
                },
                {
                  value: 'Workspace', 
                  label: 
                  <Tooltip title={`All members of ${selectedWorkspace} can see and edit this board`}>
                    <Space>
                      <BsPeople/>
                      <span>Workspace</span>
                    </Space>
                  </Tooltip>
                }
              ]}
            />
          </div>
        </div>
        
        <div className='flex flex-col gap-[8px] mt-[16px]'>
          {titleBoard != '' ? 
          <div onClick={() => {}} className='flex justify-center p-[5px] bg-[#0c66e4] rounded-[5px] hover:bg-[#0055cc] cursor-pointer'>
            <span className='text-[14px] leading-[20px] text-white'>
              Create
            </span>
          </div> :
          <div onClick={() => {}} className='flex justify-center opacity-50 p-[5px] bg-[#f1f2f4] rounded-[5px]'>
            <span className='text-[14px] leading-[20px]'>
              Create
            </span>
          </div>}
          <div onClick={() => {}} className='flex justify-center p-[5px] bg-[#f1f2f4] rounded-[5px] hover:bg-[#dcdfe4] cursor-pointer'>
            <span className='text-[14px] leading-[20px]'>
              Start with a template
            </span>
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
          <span className='text-[#44546f] text-[14px] font-semibold my-[20px]'>Photos</span>
        </div>
        <div className='flex flex-wrap justify-between gap-[10px] w-full'>
          {renderPopoverBackgroundImageList()}
        </div>
      </div>
      <div>
        <div className=' my-[16px]'>
          <span className='text-[#44546f] text-[14px] font-semibold'>Colors</span>
        </div>
        <div className='flex flex-wrap justify-between gap-[10px] w-full'>
          {renderPopoverBackgroundColorList()}
        </div>
      </div>
    </div>
  );
}

export default CreateBoard

