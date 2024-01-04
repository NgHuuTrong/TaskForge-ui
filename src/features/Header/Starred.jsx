import React from 'react';
import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import { useStarredBoards } from '../../hooks/useBoard';
const Starred = () => {
  const { isLoading, boards } = useStarredBoards();
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
          {boards.map(({ board }) => (
            <ButtonImage
              key={board.id}
              title={board.name}
              subscription={board.workspaceName}
              url={board.background}
              to={'/b/' + board.id + '/board-detail'}
            />
          ))}
        </div>
      )}
    >
      <Button loading={isLoading} type="icon" size="normal" className="font-medium items-center flex">
        Starred <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Starred;
