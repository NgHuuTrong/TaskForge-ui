import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useCreateList } from '../../../hooks/useList';
import { toast } from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

function AddNewListSection({ boardId }) {
  const [isAdding, setIsAdding] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const { isCreating, createList } = useCreateList();
  const queryClient = useQueryClient();

  const handleAddNewList = () => {
    if (listTitle) {
      createList({ name: listTitle, boardId }, {
        onSuccess: () => {
          toast.success('New list successfully created');
          queryClient.invalidateQueries({ queryKey: ['board', boardId.toString()], exact: true });
          setIsAdding(false);
          setListTitle('');
        }
      });
    }
  };

  if (isAdding) {
    return (
      <div className="flex flex-col ml-4 h-fit bg-[--color-grey-50] p-4">
        <Input
          className="mb-4 w-[260px]"
          placeholder="Input list title..."
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
        />
        <div>
          <Button
            type="primary"
            className="bg-blue-500"
            onClick={handleAddNewList}
            disabled={isCreating}
          >
            Add new list
          </Button>
          <Button
            className="border-none shadow-none text-[--color-grey-800]"
            onClick={() => setIsAdding(false)}
          >
            <CloseOutlined className='text-[--color-grey-800]' />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      className="ml-4 flex h-fit w-[270px] items-center justify-start rounded-lg transition-all duration-300 bg-white bg-opacity-40 static"
      type="text"
      style={{
        backgroundOpacity: 0.5
      }}
      onClick={() => setIsAdding(true)}
    >
      <PlusOutlined /> Add another list
    </Button>
  );
}

export default AddNewListSection;
