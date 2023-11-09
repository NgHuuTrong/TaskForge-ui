import React, { useState } from 'react';
import {AiOutlineInfoCircle, AiOutlinePlus} from 'react-icons/ai';
import {BsPerson, BsTextParagraph, BsUpload} from 'react-icons/bs';
import {PiSelectionBackground} from 'react-icons/pi';
import { Divider, Popover } from 'antd';

function MoreOptionContent({background, setMoreOptionBox, admins}) {
    const [aboutBoardBox, setAboutBoardBox] = useState(false);
    const [changeBackgroundBox, setChangeBackgroundBox] = useState(false);

    const renderAdminsList = () => (
        admins.map((admin, index) => (
            <div key={index} >
                <div className='flex flex-row gap-[10px] items-center'>
                    <div>
                        <img onClick={() => {}} className='w-[50px] h-[50px] rounded-full hover:cursor-pointer' src={admin.avatarPath} alt="/" />
                    </div>

                    <div className='flex flex-col'>
                        <span onClick={() => {}} className='text-[16px] leading-[20px] font-semibold hover:cursor-pointer'>{admin.fullName}</span>
                        <span>@{admin.username}</span>
                    </div>
                </div>
            </div>
            
        ))
    )

    const AboutBoardContent = () => {
        return (
            <div className='min-w-[300px] max-w-[400px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <BsPerson size={30}/>
                        <span className='text-[16px] leading-[20px] font-semibold'>Board admins</span>
                    </div>


                    <div className='flex flex-col gap-[20px]'>
                        {renderAdminsList()}
                    </div>
                </div>

                <Divider/>

                <div>
                    <div className='flex items-center gap-[10px]'>
                        <BsTextParagraph size={30}/>
                        <span className='text-[16px] leading-[20px] font-semibold'>Description</span>
                    </div>

                    {/* Hiếu thêm */}

                </div>
            </div>
        )
    }

    const ChangeBackgroundContent = () => {
        return (
            <div className='min-w-[350px] max-w-[400px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <PiSelectionBackground size={30}/>
                        <span className='text-[16px] leading-[20px] font-semibold'>Change background</span>
                    </div>


                    <div className='flex justify-between'>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-[8px] w-[160px] h-[96px] hover:opacity-70 cursor-pointer' src="https://trello.com/assets/8f9c1323c9c16601a9a4.jpg" alt="/" />
                            <span>Photos</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-[8px] w-[160px] h-[96px] hover:opacity-70 cursor-pointer' src="https://trello.com/assets/97db30fe74a58b7b7a18.png" alt="/" />
                            <span>Colors</span>
                        </div>
                    </div>
                </div>

                <Divider/>

                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <BsUpload size={25}/>
                        <span className='text-[16px] leading-[20px] font-semibold'>Custom</span>
                    </div>

                    <div className='flex justify-center items-center rounded-[8px] w-[150px] h-[96px] bg-[#f1f2f4] hover:bg-[#dcdfe4] cursor-pointer'>
                        <AiOutlinePlus/>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='max-w-2xl'>
        <Popover
            content={<AboutBoardContent/>}
            trigger="click"
            open={aboutBoardBox}
            onOpenChange={() => setAboutBoardBox(false)}
            placement='bottom'
        >
            <div onClick={() => setAboutBoardBox(true)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <AiOutlineInfoCircle size={20}/>
                    <span className='text-[16px]'>About this board</span>
                </div>
                <div>
                    <span>
                        Add a description to your board.
                    </span>
                </div>
            </div>
        </Popover>

        <Popover
            content={<ChangeBackgroundContent/>}
            trigger="click"
            open={changeBackgroundBox}
            onOpenChange={() => setChangeBackgroundBox(false)}
            placement='right'
            >
            <div onClick={() => setChangeBackgroundBox(true)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <img style={{borderRadius: '3px'}} height={20} width={20} src={background} alt="/" />
                    <span className='text-[16px]'>Change background</span>
                </div>
                <div>
                    <span>
                        Change the background to a different color, from an existing image or upload from your device.
                    </span>
                </div>
            </div>
        </Popover>
    </div>
  )
}

export default MoreOptionContent