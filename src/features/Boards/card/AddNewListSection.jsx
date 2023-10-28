import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';

function AddNewListSection({ addNewList }) {
  const [isAdding, setIsAdding] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const handleAddNewList = () => {
    if (listTitle) {
      addNewList(listTitle);
    }
    setIsAdding(false);
    setListTitle('');
  };
  if (isAdding) {
    return (
      <div className="ml-4 h-fit bg-[#f1f2f4] p-4">
        <Input
          className="mb-4 w-[260px]"
          placeholder="Input list title..."
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
        ></Input>
        <Button
          type="primary"
          className="bg-blue-500"
          onClick={handleAddNewList}
        >
          Add new list
        </Button>
        <Button
          className="border-none shadow-none"
          onClick={() => setIsAdding(false)}
        >
          <CloseOutlined></CloseOutlined>
        </Button>
      </div>
    );
  }
  return (
    <Button
      className="ml-4 flex h-fit w-[270px] items-center justify-start rounded-lg"
      type="text"
      onClick={() => setIsAdding(true)}
    >
      <PlusOutlined /> Add another list
    </Button>
  );
}

export default AddNewListSection;
