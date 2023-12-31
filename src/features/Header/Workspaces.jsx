import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Button from '../../ui/Button';
import WorkspacesContent from './WorkspaceContent';

const Workspaces = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => <WorkspacesContent />}
    >
      <Button type="icon" size="normal" classNames="w-full flex justify-between">
        Workspaces
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Workspaces;
