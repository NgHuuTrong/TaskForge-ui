import React, { useEffect, useState } from 'react';

import Header from './Header';
import BoardContent from '../BoardContent';
import { useBoard } from '../../../hooks/useBoard';
import Spinner from '../../../ui/Spinner';
import ClosedBoardContent from '../ClosedBoardContent';

const defaultBg = 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';

function BoardDetailLayout() {
  const { board, isLoading } = useBoard();
  const [background, setBackground] = useState(defaultBg);
  const [listsOrder, setListsOrder] = useState([]);
  const [lists, setLists] = useState([]);
  console.log(board)

  useEffect(() => {
    if (!isLoading) {
      setBackground(board.background || defaultBg);
      setLists(board.lists);
      setListsOrder(board.listsOrder);
    }
  }, [board, isLoading]);
  if (isLoading) return <Spinner />;

  if(board.closed) {
    return <div
      className="bg-cover h-full flex flex-col"
      style={{ backgroundImage: `${background.startsWith('linear') ? background : 'url(' + background + ')'}` }}
    >
    {/* can biet isAdmin */}
      <ClosedBoardContent boardTitle={board.name} boardId={board.id} isAdmin={true}></ClosedBoardContent>
    </div>
  }

  return (
    <div
      className="bg-cover h-full flex flex-col"
      style={{ backgroundImage: `${background.startsWith('linear') ? background : 'url(' + background + ')'}` }}
    >
      <Header setBackground={setBackground} background={background} board={board} />
      <div className='flex-grow overflow-x-scroll'>
        <BoardContent
          id={board.id} lists={lists} listsOrder={listsOrder} setLists={setLists} setListsOrder={setListsOrder}
        />
      </div>
    </div>
  );
}

export default BoardDetailLayout;
