import { Input, Modal } from 'antd';

function CopyListModal({
  isCopyModalOpen,
  handleCopyList,
  setIsCopyModalOpen,
  setCopyListName,
  copyListName,
}) {
  return (
    <Modal
      title="Copy list"
      open={isCopyModalOpen}
      onOk={() => handleCopyList()}
      okButtonProps={{ type: 'primary', className: 'bg-sky-500' }}
      onCancel={() => {
        setIsCopyModalOpen(false);
        setCopyListName('');
      }}
    >
      <Input
        placeholder="Name"
        value={copyListName}
        onChange={(e) => setCopyListName(e.target.value)}
      ></Input>
    </Modal>
  );
}

export default CopyListModal;
