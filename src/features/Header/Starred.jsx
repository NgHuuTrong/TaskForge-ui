import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import starred from '../../data/starred.json';
import Button from '../../ui/Button';

const Starred = () => {
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
          {starred.map((board) => (
            <ButtonImage
              key={board.id}
              title={board.boardName}
              subscription={board.workspaceName}
              url={board.img}
              to={'/b/' + board.id + '/board-detail'}
            />
          ))}
        </div>
      )}
    >
      <Button type="icon" size="normal">
        Starred <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Starred;
