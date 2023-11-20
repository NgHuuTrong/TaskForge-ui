import { Select } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { moveCardToAnotherList } from '../boardSlice';

function MoveCard({
  moveCard,
  setMoveCard,
  currentList,
  lists
}) {
  const dispatch = useDispatch();
  const [listToMove, setListToMove] = useState(currentList);

  function handleMoveCard() {
    if (listToMove !== currentList) {
      dispatch(moveCardToAnotherList({
        originalListId: currentList,
        newListId: listToMove,
        originalIndex: moveCard,
        newIndex: 0
      }));
    }

    setMoveCard('');
  }

  return (
    <CardModal
      title="Move list"
      open={moveCard !== ''}
      onOk={handleMoveCard}
      onCancel={() => setMoveCard('')}
    >
      <Select
        defaultValue={currentList}
        onChange={(value) => setListToMove(value)}
        options={lists.map((col) => {
          return { value: col.id, label: col.id };
        })}
        className="h-16 w-full rounded-sm"
      />
    </CardModal>
  );
}

export default MoveCard;
