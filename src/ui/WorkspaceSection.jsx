import React, { useState } from 'react'
import { Avatar } from 'antd'
import SidebarTab from './SidebarTab'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/Sidebar/sidebarSlice';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 14c2e78 (update icons for Header, Sidebar)
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiGearLight } from 'react-icons/pi';
<<<<<<< HEAD
=======
>>>>>>> f8e3df0 (update sidebar)
=======
>>>>>>> 14c2e78 (update icons for Header, Sidebar)

const tabs = [
    {
        icon: <HiOutlineViewBoards />,
        title: 'Boards'
    },
    {
        icon: <AiOutlineHeart />,
        title: 'Highlights'
    },
    {
        icon: <HiOutlineUsers />,
        title: 'Members'
    },
    {
        icon: <PiGearLight />,
        title: 'Settings'
    }
];

function WorkspaceSection({ name }) {
    const activeTab = useSelector(state => state.sidebar.activeTab);
    const dispatch = useDispatch();
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className='w-full mb-4'>
            <div
                className='flex justify-between items-center font-medium w-full rounded-xl px-[1rem] py-[0.25rem] text-[--color-grey-500] hover:bg-[--color-grey-200] cursor-pointer'
                onClick={() => setOpenDropdown(openDropdown => !openDropdown)}
            >
                <div className='flex items-center gap-5 text-[1.4rem] leading-[30px] font-semibold'>
                    <Avatar
                        className='z-0'
                        shape='square'
                        size='small'
                        style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                    >
                        C
                    </Avatar>
                    <span>{name}</span>
                </div>
                <div
                    className='flex justify-center items-center w-[2.3rem] h-[2.3rem] rounded-md'
                >
                    {
                        openDropdown ? <FaAngleUp size='2rem' /> : <FaAngleDown size='2rem' />
                    }
                </div>
            </div>
            {
                openDropdown && <ul className='mt-[1rem]'>
                    {
                        tabs.map(tab => {
                            const key = name + '-' + tab.title;
<<<<<<< HEAD

=======
                            
>>>>>>> f8e3df0 (update sidebar)
                            return <li
                                className='mb-[0.25rem]'
                                key={key}
                                onClick={() => dispatch(setActiveTab(key))}
                            >
                                <SidebarTab
                                    to='/'
                                    icon={tab.icon}
                                    title={tab.title}
<<<<<<< HEAD
                                    type='sub-workspace'
=======
                                    size='small'
>>>>>>> f8e3df0 (update sidebar)
                                    selected={activeTab === key}
                                />
                            </li>
                        }
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default WorkspaceSection