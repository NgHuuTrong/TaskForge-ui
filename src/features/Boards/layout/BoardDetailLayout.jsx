import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import boards from '../../../data/recent.json';
import BoardContent from '../BoardContent';

const defaultBg =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1849a4a0cc47bd7f5c6e08a06cf3affa/photo-1516553174826-d05833723cd4.jpg';

function BoardDetailLayout() {
  const { boardId } = useParams();
  const board = boards[boardId];

  const [background, setBackground] = useState(board.img || defaultBg);
  useEffect(() => {
    setBackground(board.img || defaultBg);
  }, [board.img]);

  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `${background.startsWith('linear') ? background : 'url(' + background + ')'}` }}
    >
      <Header setBackground={setBackground} background={background} board={board} />
      <BoardContent />
    </div>
  );
}

export default BoardDetailLayout;
