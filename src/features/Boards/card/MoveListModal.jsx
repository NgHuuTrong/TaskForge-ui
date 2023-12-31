import { Select } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useState } from 'react';
import { useMoveAllCardsInList } from '../../../hooks/useList';

function MoveListModal({
  originalList,
  isMoveListOpen,
  setIsMoveListOpen,
  lists
}) {
  const [listMoveTo, setListMoveTo] = useState(null);
  const { isMoving, moveAllCards } = useMoveAllCardsInList(originalList?.boardId);

  function handleMoveList() {
    if (listMoveTo !== originalList.id) {
      moveAllCards({ listId: originalList.id, body: { destinationListId: listMoveTo } })
    }

    setIsMoveListOpen(false);
  }

  return (
    <CardModal
      title={<h1 className='text-[--color-grey-800]'>Move All Cards To</h1>}
      open={isMoveListOpen}
      onOk={handleMoveList}
      onCancel={() => setIsMoveListOpen(false)}
    >
      <Select
        defaultValue={originalList.id}
        onChange={(value) => setListMoveTo(value)}
        options={lists.map((list) => {
          return { value: list.id, label: list.name };
        })}
        className="h-16 w-full rounded-sm"
        disabled={isMoving}
      />
    </CardModal>
  );
}

export default MoveListModal;
