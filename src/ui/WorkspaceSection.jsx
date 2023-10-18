import React, { useState } from 'react'
import { Avatar } from 'antd'
import SidebarTab from './SidebarTab'

const tabs = [
    {
        icon: <i className="fa fa-table"></i>,
        title: 'Boards'
    },
    {
        icon: <i className="fa-regular fa-heart"></i>,
        title: 'Highlights'
    },
    {
        icon: <i className="fa-solid fa-user-group"></i>,
        title: 'Members'
    },
    {
        icon: <i className="fa fa-cog"></i>,
        title: 'Settings'
    }
];

function WorkspaceSection({ name }) {
    const [selectedTab, setSelectedTab] = useState('');
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className='w-full mb-4'>
            <div
                className='flex justify-between items-center font-medium w-full rounded-xl px-[1rem] py-[0.25rem] text-[--color-grey-500] hover:bg-[--color-grey-200] cursor-pointer'
                onClick={() => setOpenDropdown(openDropdown => !openDropdown)}
            >
                <div className='flex items-center gap-5 text-[1.4rem] leading-[30px] font-semibold'>
                    <Avatar shape='square' size='small' style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>C</Avatar>
                    <span>{name}</span>
                </div>
                <div
                    className='flex justify-center items-center w-[2.3rem] h-[2.3rem] rounded-md'
                >
                    {
                        openDropdown ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>
                    }
                </div>
            </div>
            {
                openDropdown && <ul className='mt-[1rem]'>
                    {
                        tabs.map(tab => <li
                            className='mb-[0.25rem]'
                            key={tab.title}
                            onClick={() => setSelectedTab(tab.title)}
                        >
                            <SidebarTab
                                to='/'
                                icon={tab.icon}
                                title={tab.title}
                                size='small'
                                selected={selectedTab === tab.title}
                            />
                        </li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default WorkspaceSection