import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardHeader from './Card/CardHeader';
import Card from './Card/Card';
import CopyListModal from './Card/CopyListModal';
import MoveListModal from './Card/MoveListModal';
import AddCardSection from './Card/AddCardSection';
import { deleteAllCards, deleteList } from './boardSlice';
import MoveCard from './Card/MoveCard';
import { useDispatch } from 'react-redux';

function List({
  list,
  lists
}) {
  const items = [
    {
      label: (
        <Button
          onClick={() => setIsAddCard(true)}
          className="w-full border-none"
        >
          Add card
        </Button>
      ),
      key: '1',
    },
    {
      label: (
        <Button
          onClick={() => setIsCopyListOpen(true)}
          className="w-full border-none"
        >
          Copy list
        </Button>
      ),
      key: '2',
    },
    {
      label: (
        <Button
          onClick={() => setIsMoveListOpen(true)}
          className="w-full border-none"
        >
          Move all cards in this list
        </Button>
      ),
      key: '3',
    },
    {
      label: (
        <Popconfirm
          title="Delete all the task"
          description="Are you sure you want to delete all the tasks in this list?"
          onConfirm={() => dispatch(deleteAllCards(list.id))}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="flex border-none">
            Archive all cards in this list
          </Button>
        </Popconfirm>
      ),
      key: '4',
    },
    {
      label: (
        <Popconfirm
          title="Delete this list"
          description="Are you sure you want to delete this list?"
          onConfirm={() => dispatch(deleteList(list.id))}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-full border-none">Archive this list</Button>
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
          <div className="ml-4 h-fit rounded-lg bg-[#f1f2f4] p-4">
            <CardHeader id={list.id} items={items} />
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="min-h-[10px] w-[270px]"
            >
              {list.list.map((card, index) => (
                <Draggable draggableId={card.id?.toString()} index={index} key={card.id}>
                  {
                    (provided) => (
                      <Card
                        listId={list.id}
                        card={card}
                        index={index}
                        setMoveCard={setMoveCard}
                        provided={provided}
                      />
                    )
                  }
                </Draggable>
              ))}
              {provided.placeholder}
              <AddCardSection
                isAddCard={isAddCard}
                setIsAddCard={setIsAddCard}
                listId={list.id}
              />
            </div>
          </div>
        )}
      </Droppable>
      <CopyListModal
        originalList={list}
        isCopyListOpen={isCopyListOpen}
        setIsCopyListOpen={setIsCopyListOpen}
      />
      <MoveListModal
        originalList={list}
        isMoveListOpen={isMoveListOpen}
        setIsMoveListOpen={setIsMoveListOpen}
        lists={lists}
      />
      <MoveCard
        moveCard={moveCard}
        setMoveCard={setMoveCard}
        currentList={list.id}
        lists={lists}
      />
    </>
  );
}

export default List;
