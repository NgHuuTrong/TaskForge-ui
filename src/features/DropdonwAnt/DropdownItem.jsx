import { useState } from 'react';
import { Dropdown, Space, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BsArrowUpRight } from 'react-icons/bs';

const DropdownItem = ({ trigger, icon, title, dropdownRender }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      trigger={[trigger]}
      arrow={true}
      dropdownRender={() => (
        <div className="w-96 rounded-xl bg-white shadow-[5px_10px_18px_#888888]">
          <div className="flex flex-col p-5">
            <div className="mb-8 flex w-full justify-between">
              <div className="mx-auto my-0 text-lg font-medium text-[--color-grey-500]">
                Notification settings
              </div>
              <div className="">
                <CloseOutlined className="" onClick={() => setOpen(false)} />
              </div>
            </div>
            <div className="grid grid-rows-4 items-center gap-1">
              <div className="text-sm text-[--color-grey-500]">
                Frequency of email notifications
              </div>
              <Select
                defaultValue="Periodic"
                style={{ width: 120 }}
                //   onChange={handleChange}
                options={[
                  { value: 'Periodic', label: 'Periodic' },
                  { value: 'Right away', label: 'Right away' },
                  { value: 'Never', label: 'Never' },
                ]}
              />
              <div className="flex cursor-pointer">
                Allow notification on Desktop
              </div>
              <div className="flex cursor-pointer items-center">
                All notification settings
                <BsArrowUpRight size={12} className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      )}
    >
      <div>
        <div>
          <Space size={'small'} className="flex items-center justify-center">
            {icon}
          </Space>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropdownItem;
