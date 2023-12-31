import React from 'react';

import recents from '../../data/recent.json';
import ButtonImage from '../../ui/ButtonImage';

const RecentContent = () => {
  return (
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
  );
};

export default RecentContent;
