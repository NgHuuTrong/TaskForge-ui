import { Input } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { copyList } from '../boardSlice';

function CopyListModal({
  originalList,
  isCopyListOpen,
  setIsCopyListOpen
}) {
  const [copyListId, setCopyListId] = useState(originalList.id + ' Copy');
  const dispatch = useDispatch();

  function handleCopyList() {
    if (!copyListId) return;

    dispatch(copyList({
      listId: copyListId,
      cardList: originalList.list
    }));

    setCopyListId('');
    setIsCopyListOpen(false);
  }

  return (
    <CardModal
      title="Copy list"
      open={isCopyListOpen}
      onOk={handleCopyList}
      onCancel={() => setIsCopyListOpen(false)}
    >
      <Input
        placeholder="Name"
        value={copyListId}
        onChange={(e) => setCopyListId(e.target.value)}
      />
    </CardModal>
  );
}

export default CopyListModal;
