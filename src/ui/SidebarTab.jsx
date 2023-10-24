import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import SubTemplateTabs from './SubTemplateTabs';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSubTemplateTabs } from '../features/Sidebar/sidebarSlice';

function SidebarTab({ icon = null, to, title, type = 'main', selected = false, onClick }) {
  const base = 'flex justify-between items-center w-full rounded-xl';

  const selectedStyle = selected
    ? ' text-[--color-brand-500] bg-[--color-brand-50]'
    : ' text-[--color-grey-500] hover:bg-[--color-grey-200]';

  const types = {
    main: ' pl-[1rem] pr-[0.5rem] py-[0.25rem] font-semibold',
    'sub-templates': ' pl-[2.8rem] pr-[0.5rem] py-[0.25rem] font-normal',
    'sub-workspace': ' group/item pl-[2.8rem] pr-[0.5rem] py-[0.25rem] font-normal',
  };

  const allClass = base + selectedStyle + types[type];

  const showSubTemplateTabs = useSelector((state) => state.sidebar.showSubTemplateTabs);
  const dispatch = useDispatch();

  return (
    <>
      <Link
        to={to}
        className={allClass}
        onClick={() => {
          if (type === 'sub-templates') {
            onClick();
          } else if (title === 'Templates' && !showSubTemplateTabs) {
            dispatch(setShowSubTemplateTabs(true));
          } else if (showSubTemplateTabs) {
            dispatch(setShowSubTemplateTabs(false));
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
      </Link>
      {title === 'Templates' && <SubTemplateTabs />}
    </>
  );
}

export default SidebarTab;
