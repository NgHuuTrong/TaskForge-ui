import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import recents from '../../data/recent.json';
import ButtonImage from '../../ui/ButtonImage';
import Button from '../../ui/Button';

const Recent = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
          {recents.map((recent) => (
            <ButtonImage
              key={recent.id}
              title={recent.boardName}
              subscription={recent.workspaceName}
              url={recent.img}
              to={'/b/' + recent.id + '/board-detail'}
            />
          ))}
        </div>
      )}
    >
      <Button type="icon" size="normal">
        Recent <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Recent;
