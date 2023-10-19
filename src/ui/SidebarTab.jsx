import React from 'react'
import { Link } from 'react-router-dom'

function SidebarTab({
    icon = null,
    to,
    title,
    size = 'medium',
    selected
}) {
    const base = 'flex justify-between items-center w-full rounded-xl';

    const selectedStyle = selected ? ' text-[--color-brand-500] bg-[--color-brand-50]' : ' text-[--color-grey-500] hover:bg-[--color-grey-200]';

    const sizes = {
        'small': ' group/item pl-[2.8rem] pr-[0.5rem] py-[0.25rem] font-medium',
        'medium': ' pl-[1rem] pr-[0.5rem] py-[0.25rem] font-semibold'
    };

    const allClass = base + selectedStyle + sizes[size];

    return (
        <Link to={to} className={allClass}>
            <div className='flex items-center gap-5 text-[1.4rem] leading-[30px]'>
                {icon}
                <span>{title}</span>
            </div>
            {
                size === 'small' && <div className='invisible translate-x-0 group-hover/item:visible group-hover/item:-translate-x-3 transition-all duration-300'>
                    <i className="fa fa-angle-right"></i>
                </div>
            }
        </Link>
    )
}

export default SidebarTab