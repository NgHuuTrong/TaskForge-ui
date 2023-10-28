import { Modal, Select } from 'antd';

function MoveItemModal({
  moveItem,
  setMoveItem,
  setListMoveTo,
  handleMoveItem,
  listMoveTo,
  columns,
}) {
  return (
    <Modal
      title="Move list"
      open={moveItem !== ''}
      onOk={() => handleMoveItem()}
      okButtonProps={{ type: 'primary', className: 'bg-sky-500' }}
      onCancel={() => {
        setMoveItem('');
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

export default MoveItemModal;
