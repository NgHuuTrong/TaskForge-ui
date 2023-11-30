import { useState } from 'react';
import { Space, Select, Dropdown } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BsArrowUpRight } from 'react-icons/bs';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

const EmailFrequency = ({ trigger, icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[304px]">
          <div className="mb-8 flex w-full justify-between items-center">
            <div />
            <Heading as="h5">Notifications settings</Heading>
            <Button type="icon" size="small" onClick={() => setOpen(false)}>
              <CloseOutlined size={16} />
            </Button>
          </div>
          <div className="grid grid-rows-4 items-center gap-1">
            <Heading as="h5" classNames="text-[12px]">
              Notification email frequency
            </Heading>
            <Select
              defaultValue="Periodic"
              options={[
                { value: 'Periodic', label: 'Periodic' },
                { value: 'Right away', label: 'Right away' },
                { value: 'Never', label: 'Never' },
              ]}
            />
            <Button type="icon" classNames="text-start py-[8px]">
              Allow notification on Desktop
            </Button>
            <Button type="icon" classNames="flex justify-between items-center">
              <span>All notification settings</span>
              <BsArrowUpRight color="var(--color-grey-500)" size={16} />
            </Button>
          </div>
        </div>
      )}
    >
      <Space size={'small'} className="hover:bg-[--color-grey-200]">
        {icon}
      </Space>
    </Dropdown>
  );
};

export default EmailFrequency;
