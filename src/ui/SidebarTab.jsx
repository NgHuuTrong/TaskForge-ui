import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import SubTemplateTabs from './SubTemplateTabs';

function SidebarTab({ icon = null, to, title, type = 'main', onClick }) {
  const base = 'flex justify-between items-center w-full rounded-xl';
  const [showSubTabs, setShowSubTabs] = useState(false);

  const types = {
    main: ' pl-[1rem] pr-[0.5rem] py-[0.25rem] font-semibold',
    'sub-templates': ' pl-[2.8rem] pr-[0.5rem] py-[0.25rem] font-normal',
    'sub-workspace': ' group/item pl-[2.8rem] pr-[0.5rem] py-[0.25rem] font-normal',
  };

  const allClass = base + types[type];

  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          allClass + (isActive ? ' text-[--color-brand-500] bg-[--color-selected-bg]' : ' hover:bg-[--color-grey-200]')
        }
        onClick={() => {
          if (type === 'sub-templates') {
            onClick();
          } else if (title === 'Templates') {
            setShowSubTabs((prev) => !prev);
          }
        }}
      >
        <div className="flex items-center gap-3 text-[1.4rem] leading-[30px]">
          {icon}
          <span>{title}</span>
        </div>
        {type === 'sub-workspace' && (
          <div className="invisible translate-x-0 group-hover/item:visible group-hover/item:-translate-x-3 transition-all duration-300">
            <FaAngleRight />
          </div>
        )}
      </NavLink>
      {title === 'Templates' && <SubTemplateTabs showSubTabs={showSubTabs} />}
    </>
  );
}

export default SidebarTab;
