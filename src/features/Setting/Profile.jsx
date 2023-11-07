import React from 'react';

import { Input, Tooltip, Button, Upload } from 'antd';
import { MdPublic } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';

const { TextArea } = Input;

function Profile(props) {
  return (
    <div className='flex flex-col items-center mt-[50px] '>
        <img src="https://trello.com/assets/eff3d701a9c3a71105ea.svg" alt="" />

        <div className='w-full max-w-[530px]'>
            <h3 className='text-[#172b4d] text-[20px] font-medium leading-[26px] mt-[40px]'>About</h3>
            <hr className='border-[1px] mt-[10px]'/>

            <div>
                <div className='flex flex-row justify-between items-center mt-[40px]'>
                    <span className='text-[#172b4d] text-[14px] font-semibold leading-[16px]'>Avatar</span>
                    <Tooltip title='Visible to anyone on the internet' className='flex gap-[5px] items-center cursor-pointer leading-[12px] text-[#44546f] text-[12px]'>
                        <MdPublic/>
                        <span>Alsways public</span>
                    </Tooltip>
                </div>
                <div className='flex justify-center mt-[40px]'>
                    <div className='relative '>
                        <img className='rounded-full' width={100} height={100} src={props.user.avatarPath} alt="/" />
                        <Upload>
                            <AiFillCamera onClick={() => {}} className='text-[30px] p-[5px] bg-[black] rounded-[25px] absolute right-[0px] bottom-[20px] text-[white] hover:opacity-50 cursor-pointer'/>
                        </Upload>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between items-center mt-[20px]'>
                    <span className='text-[#172b4d] text-[14px] font-semibold leading-[16px]'>Username</span>
                    <Tooltip title='Visible to anyone on the internet' className='flex gap-[5px] items-center cursor-pointer leading-[12px] text-[#44546f] text-[12px]'>
                        <MdPublic/>
                        <span>Alsways public</span>
                    </Tooltip>
                </div>
                <Input style={{borderRadius: 3, marginTop: 12}} defaultValue={props.user.username}/>
            </div>

            <div>
                <div className='flex flex-row justify-between items-center mt-[20px]'>
                    <span className='text-[#172b4d] text-[14px] font-semibold leading-[16px]'>Bio</span>
                    <Tooltip title='Visible to anyone on the internet' className='flex gap-[5px] items-center cursor-pointer leading-[12px] text-[#44546f] text-[12px]'>
                        <MdPublic/>
                        <span>Alsways public</span>
                    </Tooltip>
                </div>
                <TextArea rows={4} style={{borderRadius: 3, marginTop: 12}}/>
            </div>

            <Button type='pimary' style={{
                borderRadius: 3, 
                backgroundColor: 'blue', 
                color: 'white', 
                width: '100%',
                marginTop: 20,
                fontWeight: 500
            }}>
                Save
            </Button>
        </div>

        <div className='h-[50px]'></div>
    </div>
  )
}

export default Profile