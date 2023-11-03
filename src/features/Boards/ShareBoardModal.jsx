import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Input, Popover, Button } from 'antd';

function ShareBoardModal({creator, membersList}) {
    const [changeShareLinkBox, setChangeShareLinkBox] = useState(false);
    const [isCreatedLink, setIsCreatedLink] = useState(false);
    const [admins, setAdmins] = useState([creator]);
    const [members, setMembers] = useState(membersList);

    const renderAdminsShareBoard = () => (
        admins.map((admin, index) => (
            <div key={index} className='flex justify-between items-center mt-[20px]'>
                <div className='flex items-center gap-[14px]'>
                    <div className=''>
                        <img className='h-[36px] w-[36px]' src={admin.avatarPath} alt="/" />
                    </div>
                    <div className='flex flex-col'>
                        <span>{admin.fullName}</span>
                        <span>@{admin.username}</span>
                    </div>
                </div>
                <Popover
                    content={<ChangeRoleContent index={index} isMember={false}/>}
                    trigger="click"
                    open={false}
                    onOpenChange={() => {}}
                    placement='bottom'
                >
                    <div onClick={() => {}} className='flex gap-[16px] items-center rounded-[4px] p-[12px] bg-[#f1f2f4] hover:bg-[#dcdfe4] cursor-pointer'>
                        <span className='font-medium'>Admin</span>
                        <MdOutlineKeyboardArrowDown size={20}/>
                    </div>
                </Popover>
            </div>
        ))
    )

    const renderMembersShareBoard = () => (
        members.map((member, index) => (
            <div key={index} className='flex justify-between items-center mt-[20px]'>
                <div className='flex items-center gap-[14px]'>
                    <div className=''>
                        <img className='h-[36px] w-[36px]' src={member.avatarPath} alt="/" />
                    </div>
                    <div className='flex flex-col'>
                        <span>{member.fullName}</span>
                        <span>@{member.username}</span>
                    </div>
                </div>
                <Popover
                    content={<ChangeRoleContent index={index} isMember={true}/>}
                    trigger="click"
                    open={false}
                    onOpenChange={() => {}}
                    placement='bottom'
                >
                    <div onClick={() => {}} className='flex gap-[16px] items-center rounded-[4px] p-[12px] bg-[#f1f2f4] hover:bg-[#dcdfe4] cursor-pointer'>
                        <span className='font-medium'>Member</span>
                        <MdOutlineKeyboardArrowDown size={20}/>
                    </div>
                </Popover>
            </div>
        ))
    )

    const ChangeRoleContent = ({index, isMember}) => {
        if (isMember) return (
        <div>
            <div onClick={() => {}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <span className='text-[16px] font-medium'>Admin</span>
                    <BsCheck size={20} color='green'/>
                </div>
            </div>
            {admins.length !== 1 ? 
            <div onClick={() => {}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <span className='text-[16px] font-medium'>Member</span>
                    <BsCheck size={20} color='green'/>
                </div>
            </div> : 
            <div className='p-[8px] rounded-[5px] text-[#d2d5dc]'>
                <div className='flex gap-[5px] items-center'>
                    <span className='text-[16px] font-medium'>Member</span>
                </div>
                <div>
                    <span>
                        Boards must have at least one admin. 
                    </span>
                </div>
            </div>}
            <div onClick={() => {}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div>
                    <span className='text-[16px] font-medium'>Leave board</span>
                </div>
            </div>
        </div>)
        return (
            <div>
            <div onClick={() => {}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <span className='text-[16px] font-medium'>Admin</span>
                    <BsCheck size={20} color='green'/>
                </div>
            </div>
            <div onClick={() => {}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div>
                    <span className='text-[16px] font-medium'>Leave board</span>
                </div>
            </div>
        </div>
        )
    }

    const ChangeShareLinkContent = () => (
        <div>
            <div onClick={() => setChangeShareLinkBox(false)} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div className='flex gap-[5px] items-center'>
                    <span className='text-[16px] font-medium'>Can join as member</span>
                    <BsCheck size={20} color='green'/>
                </div>
                <div>
                    <span>
                        Board members can view and edit cards, lists, and some board settings. 
                    </span>
                </div>
            </div>
            <div onClick={() => {setIsCreatedLink(false); setChangeShareLinkBox(false)}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
                <div>
                    <span className='text-[16px] font-medium'>Delete link</span>
                </div>
                <div>
                    <span>
                        The existing board share link will no longer work.
                    </span>
                </div>
            </div>
        </div>
    )

  return (
    <div>
        <div className='flex gap-[5px]'>
            <Input className='p-[10px] rounded-[4px]' placeholder="Email address" />
            <div className='p-[10px] px-[20px] rounded-[4px] text-white bg-[#0c66e4] hover:bg-[#0055cc] cursor-pointer'>Share</div>
        </div>
        <div className='flex justify-between items-center mt-[20px]'>
            <div className='flex items-center gap-[10px]'>
                <div className='rounded-[4px] p-[12px] bg-[#f1f2f4]'>
                    <FiLink/>
                </div>
                <div className='flex flex-col'>
                    <span>Anyone with the board share link</span>
                    {!isCreatedLink ? 
                    <div>
                        <Button onClick={() => setIsCreatedLink(true)} className='p-[0px] mt-[-10px]' type='link'>Create link</Button>
                    </div> :
                    <div>
                        <Button onClick={() => {}} className='p-[0px] mt-[-10px]' type='link'>Copy link</Button>
                    </div>}
                </div>
            </div>

            {isCreatedLink ? 
            <Popover
                content={<ChangeShareLinkContent/>}
                trigger="click"
                open={changeShareLinkBox}
                onOpenChange={() => setChangeShareLinkBox(false)}
                placement='bottom'
            >
                <div onClick={() => setChangeShareLinkBox(true)} className='flex gap-[16px] items-center rounded-[4px] p-[12px] bg-[#f1f2f4] hover:bg-[#dcdfe4] cursor-pointer'>
                    <span className='font-medium'>Can join as member</span>
                    <MdOutlineKeyboardArrowDown size={20}/>
                </div>
            </Popover>:
            <div></div>
            }
            
        </div>

        <div>
            {renderAdminsShareBoard()}
            {renderMembersShareBoard()}
        </div>
    </div>
  )
}

export default ShareBoardModal