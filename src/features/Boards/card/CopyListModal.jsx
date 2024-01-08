import { Input } from 'antd';
import CardModal from '../../../ui/CardModal';
import { useState } from 'react';
import { useCopyList } from '../../../hooks/useList';

function CopyListModal({
  originalList,
  isCopyListOpen,
  setIsCopyListOpen
}) {
  const [copyListName, setCopyListName] = useState(originalList?.name);
  const { isCopying, copy } = useCopyList(originalList?.boardId);

  function handleCopyList() {
    if (!copyListName) return;

    copy({ listId: originalList.id, body: { name: copyListName } });

    setCopyListName('');
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
        disabled={isCopying}
        value={copyListName}
        onChange={(e) => setCopyListName(e.target.value)}
      />
    </CardModal>
  );
}

export default CopyListModal;
