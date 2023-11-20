import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../boardSlice';

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
            className="flex items-center justify-center border-none"
            type="text"
            onClick={() => setIsAddCard((prev) => !prev)}
          >
            <CloseOutlined />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      className="mt-2 flex w-full items-center justify-center border-none bg-transparent shadow-sm hover:bg-[#d0d4dc]"
      onClick={() => setIsAddCard((prev) => !prev)}
      type="text"
    >
      <PlusOutlined /> Add a card
    </Button>
  );
}

export default AddCardSection;
