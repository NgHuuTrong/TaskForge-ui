import React, { useEffect, useState } from 'react';

import Header from './Header';
import BoardContent from '../BoardContent';
import { useBoard, useDeleteBoard, useUpdateBoard } from '../../../hooks/useBoard';
import Spinner from '../../../ui/Spinner';
import Button from '../../../ui/Button';
import Heading from '../../../ui/Heading';

const defaultBg = 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';

function BoardDetailLayout() {
  const { board, isLoading } = useBoard();
  const { isUpdating, updateBoard } = useUpdateBoard();
  const { isDeleting, removeBoard } = useDeleteBoard();

  const [background, setBackground] = useState(defaultBg);
  const [listsOrder, setListsOrder] = useState([]);
  const [lists, setLists] = useState([]);
  console.log(board);

  useEffect(() => {
    if (!isLoading) {
      setBackground(board.background || defaultBg);
      setLists(board.lists);
      setListsOrder(board.listsOrder);
    }
  }, [board, isLoading]);
  if (isLoading) return <Spinner />;

  return (
    <div
      className="bg-cover h-full flex flex-col"
      style={{ backgroundImage: `${background.startsWith('linear') ? background : 'url(' + background + ')'}` }}
    >
      {!board?.closed ? (
        <>
          <Header setBackground={setBackground} background={background} board={board} />
          <div className="flex-grow overflow-x-scroll">
            <BoardContent
              id={board.id}
              lists={lists}
              listsOrder={listsOrder}
              setLists={setLists}
              setListsOrder={setListsOrder}
            />
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-1/3 h-[200px] bg-[--color-grey-0] pt-[2rem] pb-[1rem] flex flex-col items-center">
            <Heading as="h3" classNames="mb-[3rem]">
              {board?.name} is closed
            </Heading>
            <Button
              size="normal"
              onClick={() => updateBoard({ boardId: board.id, body: { closed: false } })}
              disabled={isUpdating}
            >
              Reopen board
            </Button>
            <Button type="text" onClick={() => removeBoard(board.id)} disabled={isDeleting}>
              Permanently delete board
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardDetailLayout;
