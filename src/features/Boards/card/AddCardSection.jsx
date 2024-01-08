import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useCreateCard } from '../../../hooks/useCard';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

const { TextArea } = Input;

function AddCardSection({ isAddCard, setIsAddCard, listId, boardId }) {
  const [cardTitle, setCardTitle] = useState('');
  const { isCreating, createCard } = useCreateCard();
  const queryClient = useQueryClient();

  const handleAddCard = () => {
    createCard({ title: cardTitle, listId }, {
      onSuccess: () => {
        toast.success('New card successfully created');
        queryClient.invalidateQueries({ queryKey: ['board', boardId.toString()], exact: true });
        setCardTitle('');
        setIsAddCard(false);
      }
    })
  };

  if (isAddCard) {
    return (
      <div>
        <TextArea
          className='bg-[--color-grey-300] text-[--color-grey-600]'
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          placeholder="Enter a title for this card..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <div className="mt-2 flex">
          <Button
            className="mr-2 flex items-center justify-center bg-blue-500 text-white"
            type="primary"
            onClick={handleAddCard}
            disabled={isCreating}
          >
            Add card
          </Button>
          <Button
            className="flex items-center justify-center border-none text-[--color-grey-800]"
            type="text"
            onClick={() => setIsAddCard((prev) => !prev)}
            disabled={isCreating}
          >
            <CloseOutlined className='text-[--color-grey-800]' />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      className="mt-2 flex w-full items-center justify-center border-none bg-transparent shadow-sm hover:bg-[--color-grey-400]"
      onClick={() => setIsAddCard((prev) => !prev)}
      type="text"
    >
      <span className='text-[--color-grey-700] hover:text-[--color-grey-700]'>
        <PlusOutlined /> Add a card
      </span>
    </Button>
  );
}

export default AddCardSection;
