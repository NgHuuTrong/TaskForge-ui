import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../boardSlice';

const { TextArea } = Input;

function AddCardSection({ isAddCard, setIsAddCard, listId }) {
  const dispatch = useDispatch();
  const [cardDescription, setCardDescription] = useState('');

  const handleAddCard = () => {
    setCardDescription('');
    setIsAddCard(false);
    dispatch(addCard({ listId, cardDescription }));
  };

  if (isAddCard) {
    return (
      <div>
        <TextArea
          className='bg-[--color-grey-300] text-[--color-grey-600]'
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
          placeholder="Enter a title for this card..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <div className="mt-2 flex">
          <Button
            className="mr-2 flex items-center justify-center bg-blue-500 text-white"
            type="primary"
            onClick={handleAddCard}
          >
            Add card
          </Button>
          <Button
            className="flex items-center justify-center border-none text-[--color-grey-800]"
            type="text"
            onClick={() => setIsAddCard((prev) => !prev)}
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
