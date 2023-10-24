import { Dropdown, Space } from 'antd';
import Button from './Button';
import { HiOutlineChevronDown } from 'react-icons/hi2';

function MyDropdown({ open, onOpenChange, render, title }) {
  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      trigger={['click']}
      dropdownRender={() => render}
    >
      <Button size="small" type="icon" onClick={(e) => e.preventDefault()}>
        <Space size={'small'} className="text-[1.4rem]">
          <span className="text-[--color-grey-500]">{title}</span>
          <HiOutlineChevronDown size={16} />
        </Space>
      </Button>
    </Dropdown>
  );
}

export default MyDropdown;
