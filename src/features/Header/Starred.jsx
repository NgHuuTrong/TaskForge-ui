import React, { useEffect } from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import starred from '../../data/starred.json';
import Button from '../../ui/Button';
import { useBoards, useStarredBoards } from '../../hooks/useBoard';
import { getMyBoards } from '../../services/apiBoard';
const Starred = () => {
  const { isLoading, boards } = useStarredBoards();
  console.log(boards);
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[280px]">
          {!isLoading &&
            boards
              .filter((a) => a.starred)
              .map(({ board }) => (
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
      <Button loading={isLoading} type="icon" size="normal">
        Starred <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Starred;
