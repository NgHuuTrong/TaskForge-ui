import React, { useState } from 'react';
import {AiOutlineInfoCircle, AiOutlinePlus} from 'react-icons/ai';
import {BsPerson, BsTextParagraph, BsUpload} from 'react-icons/bs';
import {PiSelectionBackground} from 'react-icons/pi';
import { Divider, Popover, Upload } from 'antd';

const photos = [
    {
        backgroundPath: 'https://images.unsplash.com/photo-1691418173358-492743391cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1695667937079-b59c63660cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1691513218992-a8ee49db259a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1694042078636-1d7583b66796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1699306113718-72fe0f9dfb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1699302150582-bffc5309a8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDZ8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1694111356884-45781a164220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDd8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
    {
        backgroundPath: 'https://images.unsplash.com/photo-1699116245651-45d3cd9b7de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDh8MzE3MDk5fHx8fHwyfHwxNjk5NTQzMzA1fA&ixlib=rb-4.0.3&q=80&w=200'
    },
]

const colors = [
    {
        backgroundPath: 'https://trello.com/assets/707f35bc691220846678.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/d106776cb297f000b1f4.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/8ab3b35f3a786bb6cdac.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/a7c521b94eb153008f2d.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/aec98becb6d15a5fc95e.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/b75536d1afb40980ca57.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/92e67a71aaaa98dea5ad.svg'
    },
    {
        backgroundPath: 'https://trello.com/assets/941e9fef7b1b1129b904.svg'
    },
]

function MoreOptionContent({setBackground, background, admins}) {
    const [aboutBoardBox, setAboutBoardBox] = useState(false);
    const [changeBackgroundBox, setChangeBackgroundBox] = useState(false);
    const [listPhotosBox, setListPhotosBox] = useState(false);
    const [listColorsBox, setListColorsBox] = useState(false);
    
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

    const ListBackgroundContent = ({isPhotos}) => {
        const listBackground = isPhotos ? photos : colors;
        return (
            <div className='flex flex-col gap-[10px] w-[350px]'>
                <div className='flex justify-center'>
                    <span className='font-medium leading-[20px] text-[18px]'>{isPhotos ? "Photos" : "Colors"}</span>
                </div>
                <div className='flex flex-wrap justify-between gap-[10px] w-full'>
                    {listBackground.map((background, index) => (
                        <div
                            onClick={() => setBackground(background.backgroundPath)}
                            key={index} className='flex h-[100px] w-[48%] rounded-[8px] hover:opacity-70 cursor-pointer'
                            style={{ backgroundImage: `url(${background.backgroundPath})`, backgroundSize: 'cover' }}
                        >
                        </div>
                    ))}
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
                        
                        <Popover
                            content={<ListBackgroundContent isPhotos={true}/>}
                            trigger="click"
                            open={listPhotosBox}
                            onOpenChange={() => setListPhotosBox(false)}
                            placement='left'
                            >
                            <div onClick={() => setListPhotosBox(true)} className='flex flex-col items-center'>
                                <img className='rounded-[8px] w-[160px] h-[96px] hover:opacity-70 cursor-pointer' src="https://trello.com/assets/8f9c1323c9c16601a9a4.jpg" alt="/" />
                                <span>Photos</span>
                            </div>
                        </Popover>

                        <Popover
                            content={<ListBackgroundContent isPhotos={false}/>}
                            trigger="click"
                            open={listColorsBox}
                            onOpenChange={() => setListColorsBox(false)}
                            placement='right'
                            >
                            <div onClick={() => setListColorsBox(true)} className='flex flex-col items-center'>
                                <img className='rounded-[8px] w-[160px] h-[96px] hover:opacity-70 cursor-pointer' src="https://trello.com/assets/97db30fe74a58b7b7a18.png" alt="/" />
                                <span>Colors</span>
                            </div>
                        </Popover>
                        
                    </div>
                </div>

                <Divider/>

                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <BsUpload size={25}/>
                        <span className='text-[16px] leading-[20px] font-semibold'>Custom</span>
                    </div>

                    <Upload>
                        <div className='flex justify-center items-center rounded-[8px] w-[150px] h-[96px] bg-[#f1f2f4] hover:bg-[#dcdfe4] cursor-pointer'>
                            <AiOutlinePlus size={30}/>
                        </div>
                    </Upload>
                    
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
            placement='right'
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
                    <img style={{borderRadius: '3px', height: 20, width: 20}} src={background} alt="/" />
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