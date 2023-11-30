import { Select } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moveAllCards } from '../boardSlice';

function MoveListModal({
  originalList,
  isMoveListOpen,
  setIsMoveListOpen,
  lists
}) {
  const [listMoveTo, setListMoveTo] = useState(null);
  const dispatch = useDispatch();

  function handleMoveList() {
    if (listMoveTo !== originalList.id) {
      dispatch(moveAllCards({
        originalListId: originalList.id,
        newListId: listMoveTo
      }));
    }

    setIsMoveListOpen(false);
  }

  return (
    <CardModal
      title={<h1 className='text-[--color-grey-800]'>Move list</h1>}
      open={isMoveListOpen}
      onOk={handleMoveList}
      onCancel={() => setIsMoveListOpen(false)}
    >
      <Select
        defaultValue={originalList.id}
        onChange={(value) => setListMoveTo(value)}
        options={lists.map((list) => {
          return { value: list.id, label: list.id };
        })}
        className="h-16 w-full rounded-sm"
      />
    </CardModal>
  );
}

export default MoveListModal;
