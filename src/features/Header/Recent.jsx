import React from 'react';
import { Dropdown, Empty, Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ButtonImage from '../../ui/ButtonImage';
import { useRecentBoards } from '../../hooks/useBoard';
import Button from '../../ui/Button';

const Recent = () => {
  const { isLoading, boards } = useRecentBoards();
  console.log('boards', boards)
  return (
    <Dropdown
      load
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
          {
            isLoading && <Spin></Spin>
          }
          {!isLoading && boards.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          {!isLoading && boards.map(({ board, starred }) => (
            <ButtonImage
              hasStarred={starred}
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
      <Button type="icon" size="normal">
        Recent <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Recent;
