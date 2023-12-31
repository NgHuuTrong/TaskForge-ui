import { Select } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useState } from 'react';
import { useMoveCardToAnotherList } from '../../../hooks/useCard';

function MoveCard({
  moveCardId,
  setMoveCardId,
  currentListId,
  boardId,
  lists,
  setLists
}) {
  const [listToMove, setListToMove] = useState(currentListId);
  const { isMoving, mutate: moveCardAnotherList } = useMoveCardToAnotherList(boardId);

  function handleMoveCard() {
    if (listToMove !== currentListId) {
      const oldListIndex = lists.findIndex(l => l.id === currentListId);
      const newListIndex = lists.findIndex(l => l.id === listToMove);
      const card = lists[oldListIndex].cards.find(c => c.id === moveCardId);

      lists[oldListIndex].cardsOrder = lists[oldListIndex].cardsOrder.filter(id => id !== moveCardId);
      lists[oldListIndex].cards = lists[oldListIndex].cards.filter(c => c.id !== moveCardId);
      lists[newListIndex].cards.push(card);
      lists[newListIndex].cardsOrder.push(moveCardId);
      if(setLists) setLists([...lists]);

      moveCardAnotherList({
        cardId: moveCardId,
        body: {
          oldListId: currentListId,
          newListId: listToMove,
          newIndex: lists[newListIndex].cardsOrder.length - 1
        }
      });
    }

    setMoveCardId(null);
  }

  return (
    <CardModal
      title="Move card"
      open={moveCardId}
      onOk={handleMoveCard}
      onCancel={() => setMoveCardId(null)}
    >
      <Select
        defaultValue={currentListId}
        onChange={(value) => setListToMove(value)}
        options={lists.map((col) => {
          return { value: col.id, label: col.name };
        })}
        className="h-16 w-full rounded-sm"
        disabled={isMoving}
      />
    </CardModal>
  );
}

export default MoveCard;
