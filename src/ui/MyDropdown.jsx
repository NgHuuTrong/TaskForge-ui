import { Dropdown } from 'antd';
import { HiOutlineChevronDown } from 'react-icons/hi2';

function MyDropdown({
  render,
  title,
  hasChevron = true,
  placement = 'bottomLeft',
  type = 'header',
  ...props
}) {
  const base =
    'border-[none] rounded-[--border-radius-sm] [box-shadow:var(--shadow-sm)] flex gap-[6px] items-center [transition:all_0.2s] py-[6px] px-[10px]';
  const types = {
    header: 'text-[--color-grey-500] bg-none hover:bg-[--color-grey-100]',
    primary: 'text-[--color-grey-50] bg-[--color-brand-500] hover:bg-[--color-brand-600]',
  };
  return (
    <Dropdown placement={placement} trigger={['click']} dropdownRender={() => render} {...props}>
      <button className={`${base} ${types[type]}`}>
        <span className="text-[1.4rem] font-medium leading-[2rem]">{title}</span>
        {hasChevron && <HiOutlineChevronDown size={16} />}
      </button>
    </Dropdown>
  );
}

export default MyDropdown;
