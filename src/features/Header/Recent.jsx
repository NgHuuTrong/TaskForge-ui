import React from 'react';
import MyDropdown from '../../ui/MyDropdown';
import ButtonImage from '../../ui/ButtonImage';

import recents from '../../data/recent.json';

const Recent = () => {
  return (
    <MyDropdown
      title="Recent"
      render={
        <div className="mt-4 w-[280px] rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
          {recents.map((recent) => (
            <ButtonImage
              key={recent.id}
              title={recent.boardName}
              subscription={recent.workspaceName}
              url={recent.img}
              to="/"
            />
          ))}
        </div>
      }
    />
  );
};

export default Recent;
