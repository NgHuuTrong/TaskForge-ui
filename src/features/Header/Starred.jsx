import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Button from '../../ui/Button';
import StarredContent from './StarredContent';

const Starred = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => <StarredContent />}
    >
      <Button type="icon" size="normal" classNames="w-full flex justify-between">
        Starred <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Starred;
