import { Modal, Select } from 'antd';

function MoveListModal({
  isMoveListModalOpen,
  setIsMoveListModalOpen,
  setListMoveTo,
  handleMoveList,
  listMoveTo,
  columns,
}) {
  return (
    <Modal
      title="Move list"
      open={isMoveListModalOpen}
      onOk={() => handleMoveList()}
      okButtonProps={{ type: 'primary', className: 'bg-sky-500' }}
      onCancel={() => {
        setIsMoveListModalOpen(false);
      }}
    >
      <Select
        defaultValue={listMoveTo}
        onChange={(value) => setListMoveTo(value)}
        options={Object.values(columns).map((col) => {
          return { value: col.id, label: col.id };
        })}
        className="h-16 w-full rounded-sm"
      />
    </Modal>
  );
}

export default MoveListModal;
