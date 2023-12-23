import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ListHeader from './card/ListHeader';
import Card from './card/Card';
import CopyListModal from './card/CopyListModal';
import MoveListModal from './card/MoveListModal';
import AddCardSection from './card/AddCardSection';
import { deleteAllCards, deleteList } from './boardSlice';
import MoveCard from './card/MoveCard';
import { useDispatch } from 'react-redux';

function List({ list, lists }) {
  const items = [
    {
      label: (
        <Button onClick={() => setIsAddCard(true)} className="w-full border-none text-[--color-grey-800]">
          Add card
        </Button>
      ),
      key: '1',
    },
    {
      label: (
        <Button onClick={() => setIsCopyListOpen(true)} className="w-full border-none text-[--color-grey-800]">
          Copy list
        </Button>
      ),
      key: '2',
    },
    {
      label: (
        <Button onClick={() => setIsMoveListOpen(true)} className="w-full border-none text-[--color-grey-800]">
          Move all cards in this list
        </Button>
      ),
      key: '3',
    },
    {
      label: (
        <Popconfirm
          title={<span className="text-[--color-grey-900] text-[1.5rem] font-bold">Delete all the task</span>}
          description={
            <span className="text-[--color-grey-900]">Are you sure you want to delete all the tasks in this list?</span>
          }
          onConfirm={() => dispatch(deleteAllCards(list.id))}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-full border-none text-[--color-grey-800]">Archive all cards in this list</Button>
        </Popconfirm>
      ),
      key: '4',
    },
    {
      label: (
        <Popconfirm
          title={<span className="text-[--color-grey-900] text-[1.5rem] font-bold">Delete this list</span>}
          description={<span className="text-[--color-grey-900]">Are you sure you want to delete this list?</span>}
          onConfirm={() => dispatch(deleteList(list.id))}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-full border-none text-[--color-grey-800]">Archive this list</Button>
        </Popconfirm>
      ),
      key: '5',
    },
  ];

  const dispatch = useDispatch();
  const [isCopyListOpen, setIsCopyListOpen] = useState(false);
  const [isMoveListOpen, setIsMoveListOpen] = useState(false);
  const [isAddCard, setIsAddCard] = useState(false);
  const [moveCard, setMoveCard] = useState('');

  return (
    <>
      <Droppable droppableId={list.id} key={list.id} type="ROW">
        {(provided) => (
          <div className="ml-4 h-fit rounded-lg bg-[--color-grey-0] p-4">
            <ListHeader id={list.id} items={items} />
            <div {...provided.droppableProps} ref={provided.innerRef} className="min-h-[10px] w-[200px] md:w-[270px]">
              {list.list.map((card, index) => (
                <Draggable draggableId={card.id?.toString()} index={index} key={card.id}>
                  {(provided) => (
                    <Card listId={list.id} card={card} index={index} setMoveCard={setMoveCard} provided={provided} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddCardSection isAddCard={isAddCard} setIsAddCard={setIsAddCard} listId={list.id} />
            </div>
          </div>
        )}
      </Droppable>
      <CopyListModal originalList={list} isCopyListOpen={isCopyListOpen} setIsCopyListOpen={setIsCopyListOpen} />
      <MoveListModal
        originalList={list}
        isMoveListOpen={isMoveListOpen}
        setIsMoveListOpen={setIsMoveListOpen}
        lists={lists}
      />
      <MoveCard moveCard={moveCard} setMoveCard={setMoveCard} currentList={list.id} lists={lists} />
    </>
  );
}

export default List;
