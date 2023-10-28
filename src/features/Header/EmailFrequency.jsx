import { useState } from 'react';
import { Space, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BsArrowUpRight } from 'react-icons/bs';
import Heading from '../../ui/Heading';
import MyDropdown from '../../ui/MyDropdown';
import Button from '../../ui/Button';

const EmailFrequency = ({ trigger, icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  return (
    <MyDropdown
      open={open}
      onOpenChange={handleOpenChange}
      trigger={[trigger]}
      render={
        <div className="flex flex-col p-5 w-[304px] rounded-xl bg-[--color-grey-0] border border-[--color-grey-300]">
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
      }
      title={
        <Space size={'small'} className="flex items-center justify-center">
          {icon}
        </Space>
      }
      hasChevron={false}
    />
  );
};

export default EmailFrequency;
