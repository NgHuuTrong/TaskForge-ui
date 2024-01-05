import React from 'react';
import { Dropdown, Empty, Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import Button from '../../ui/Button';
import { useStarredBoards } from '../../hooks/useBoard';
const Starred = () => {
  const { isLoading, boards } = useStarredBoards();
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
        {isLoading && <Spin></Spin>}
        {!isLoading && boards.length == 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> }
        {!isLoading && boards.map(({ board }) => (
          <ButtonImage
            key={board.id}
            title={board.name}
            subscription={board.workspace.name}
            url={board.background}
            to={'/b/' + board.id + '/board-detail'}
          />
        ))}
        </div>
      )}
    >
      <Button loading={isLoading} type="icon" size="normal">
        Starred <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Starred;
