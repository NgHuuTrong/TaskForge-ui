import React from 'react'
import Header from '../ui/Header'
import Profile from '../features/Setting/Profile';
import Workspace from '../features/Setting/Workspace';

import { Tabs } from 'antd';

const user = {
    fullName: 'Lâm Khánh Hòa',
    username: 'hoalamkhanh',
    avatarPath: 'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
    workspace: [
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
}

function Settings() {
  return (
    <div>
        <Header/>
        <div className='pl-[48px] pr-[48px]'>
            <div className='flex flex-row items-center max-w-[875px] pt-[100px] pb-[26px]'>
                <img className='mr-[16px] rounded-full' width={48} height={48} src={user.avatarPath} alt="/" />
                <div className='flex flex-col'>
                    <span className='text-[20px] leading-[24px] font-medium text-[#172b4d] mr-[10px]'>
                        {user.fullName}
                    </span>
                    <span className='text-[12px] leading-[20px] text-[#44546f]'>
                        @{user.username}
                    </span>
                </div>
            </div>

            <div>
                <Tabs tabBarStyle={{color: '#44546f', fontWeight: 700}}>
                    <Tabs.TabPane tab='Profile and Visibility' key={0}>
                        <Profile user={user}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Workspace' key={1}>
                        <Workspace user={user}/>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Settings