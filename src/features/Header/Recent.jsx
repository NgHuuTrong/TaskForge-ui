import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Button from '../../ui/Button';
import RecentContent from './RecentContent';

const Recent = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => <RecentContent />}
    >
      <Button type="icon" size="normal" classNames="w-full flex justify-between">
        Recent <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Recent;
