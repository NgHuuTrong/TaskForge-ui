import React from 'react';
import ButtonImage from '../../ui/ButtonImage';
import MyDropdown from '../../ui/MyDropdown';

import starred from '../../data/starred.json';

const Starred = () => {
  return (
    <MyDropdown
      title="Starred"
      render={
        <div className="mt-4 w-[280px] rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
          {starred.map((board) => (
            <ButtonImage
              key={board.id}
              title={board.boardName}
              subscription={board.workspaceName}
              url={board.img}
              to="/"
            />
          ))}
        </div>
      }
    />
  );
};

export default Starred;
