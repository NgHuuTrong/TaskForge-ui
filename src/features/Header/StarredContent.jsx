import React from 'react';

import ButtonImage from '../../ui/ButtonImage';
import starred from '../../data/starred.json';

const StarredContent = () => {
  return (
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
  );
};

export default StarredContent;
