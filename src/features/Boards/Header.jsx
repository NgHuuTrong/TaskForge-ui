import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar, AiOutlineLock, AiOutlineUserAdd } from 'react-icons/ai';
import { BsPeople, BsCheck } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { Tooltip, Avatar, Input, Popover, Modal, Button  } from 'antd';
import ShareBoardModal from './ShareBoardModal';


function Header({title, isPrivate, creator, membersList}) {
    const [favorite, setFavorite] = useState(false);
    const [changeTitleBox, setChangeTitleBox] = useState(false);
    const [currTitle, setCurrTitle] = useState(title);
    const [changeVisibilityBox, setChangeVisibilityBox] = useState(false);
    const [visibility, setVisibility] = useState(isPrivate ? 'private' : 'workspace');
    const [modalShareBoard, setModalShareBoard] = useState(false);
    
    const renderAvatarList = () => (
        membersList.map((item, index) => (
            <Tooltip key={index} title={item.fullName + ` (${item.username})`} placement='bottom'>
                <Avatar src={item.avatarPath} />
            </Tooltip>
        ))
    )

    const handleChangeTitle = (e) => {
        setCurrTitle(e.target.value);
    }

    const handleChangedTitle = (e) => {
        if (e.target.value === '') setCurrTitle(title);
        setChangeTitleBox(false)
    }

    const ChangeVisibilityContent = () => (
        <div>
            <div onClick={() => {setVisibility('private'); setChangeVisibilityBox(false)}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <AiOutlineLock color='red'/>
                    <span className='text-[16px]'>Private</span>
                    {visibility === 'private' ? <BsCheck size={20} color='green'/> : <></>}
                </div>
                <div>
                    <span>
                        Only board members can see and edit this board.
                    </span>
                </div>
            </div>
            <div onClick={() => {setVisibility('workspace'); setChangeVisibilityBox(false)}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <BsPeople/>
                    <span className='text-[16px]'>Workspace</span>
                    {visibility === 'workspace' ? <BsCheck size={20} color='green'/> : <></>}
                </div>
                <div>
                    <span>
                        All members of this workspace can see and edit this board.
                    </span>
                </div>
            </div>
        </div>
    )

  return (
    <div className='pt-[52px] backdrop-blur-sm bg-white/30'>
        <div className='flex justify-between p-[10px]'>

            <div className='flex items-center gap-[20px]'>
                <div>
                    {changeTitleBox ?  
                    <Input className='max-w-[200px] border-[2px]' onPressEnter={handleChangedTitle} onBlur={handleChangedTitle} onChange={handleChangeTitle} value={currTitle}  defaultValue={currTitle}/>
                    : 
                    <span onClick={() => setChangeTitleBox(true)} className='text-[18px] font-bold leading-[32px]'>
                        {currTitle}
                    </span>}
                    
                </div>

                {!favorite ? 
                <div onClick={() => setFavorite(true)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                    <AiOutlineStar/>
                </div> :
                <div onClick={() => setFavorite(false)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                    <AiFillStar color='yellow'/>
                </div>
                } 

                <div>
                <Popover
                    content={<ChangeVisibilityContent/>}
                    title="Change Visibility"
                    trigger="click"
                    open={changeVisibilityBox}
                    onOpenChange={() => setChangeVisibilityBox(false)}
                    >
                    <div onClick={() => setChangeVisibilityBox(true)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                        {visibility === 'private' ? <AiOutlineLock/> : <BsPeople/>}
                    </div>
                </Popover>
                </div>

            </div>

            <div className='flex items-center gap-[20px]'>
                <div>
                    <Avatar.Group
                        maxCount={3}
                        size="medium"
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                        >
                        <div className='relative'>
                            <Tooltip title={creator.fullName + ` (${creator.username})`} placement='bottom'>
                                <Avatar src={creator.avatarPath} />
                            </Tooltip>
                            <Tooltip title='This member is admin of this board' placement='bottom'>
                                <RiArrowUpDoubleLine className='absolute left-0 bottom-0 text-[blue] bg-white rounded-full'/>
                            </Tooltip>
                        </div>
                        {renderAvatarList()}
                    </Avatar.Group>
                </div>

                {/* <div className='p-[5px] rounded-[4px] hover:bg-[#8896a6] cursor-pointer'>
                    <span>
                        Join board
                    </span>
                </div> */}

                <div onClick={() => setModalShareBoard(true)} className='flex items-center gap-[5px] p-[5px] rounded-[4px] bg-[#646362] text-white hover:bg-[#504f4f] cursor-pointer'>
                    <AiOutlineUserAdd />
                    <span>
                        Share
                    </span>
                </div>
                <Modal title="Share Board" footer={null} open={modalShareBoard} onBlur={() => setModalShareBoard(false)} onCancel={() => setModalShareBoard(false)}>
                    <ShareBoardModal creator={creator} membersList={membersList}/>
                </Modal>

                <div className='p-[8px] rounded-[4px] hover:bg-[#21282f] cursor-pointer'>
                    <FiMoreHorizontal/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header