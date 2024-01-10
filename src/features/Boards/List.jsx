import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ListHeader from './card/ListHeader';
import Card from './card/Card';
import CopyListModal from './card/CopyListModal';
import MoveListModal from './card/MoveListModal';
import AddCardSection from './card/AddCardSection';
import MoveCard from './card/MoveCard';
import { useDeleteList, useRemoveAllCards } from '../../hooks/useList';

function List({
  list,
  lists,
  setLists,
  setOpenCardDetailModal
}) {
  const [isCopyListOpen, setIsCopyListOpen] = useState(false);
  const [isMoveListOpen, setIsMoveListOpen] = useState(false);
  const [isAddCard, setIsAddCard] = useState(false);
  const [moveCardId, setMoveCardId] = useState(null);

  const { isDeletingList, removeList } = useDeleteList(list?.boardId);
  const { isDeletingCards, mutate: removeALlCards } = useRemoveAllCards(list?.boardId);

  const items = [
    {
      label: (
        <Button
          onClick={() => setIsAddCard(true)}
          className="w-full border-none text-[--color-grey-800]"
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
          className="w-full border-none text-[--color-grey-800]"
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
          className="w-full border-none text-[--color-grey-800]"
        >
          Move all cards in this list
        </Button>
      ),
      key: '3',
    },
    {
      label: (
        <Popconfirm
          title={<span className='text-[--color-grey-900] text-[1.5rem] font-bold'>Delete all the task</span>}
          description={<span className='text-[--color-grey-900]'>Are you sure you want to delete all the tasks in this list?</span>}
          onConfirm={() => removeALlCards(list.id)}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-full border-none text-[--color-grey-800]" disabled={isDeletingCards}>
            Remove all cards in this list
          </Button>
        </Popconfirm>
      ),
      key: '4',
    },
    {
      label: (
        <Popconfirm
          title={<span className='text-[--color-grey-900] text-[1.5rem] font-bold'>Delete this list</span>}
          description={<span className='text-[--color-grey-900]'>Are you sure you want to delete this list?</span>}
          onConfirm={() => removeList(list?.id)}
          cancelButtonProps={{ type: 'text' }}
          okButtonProps={{ className: 'bg-sky-500' }}
          okText="Yes"
          cancelText="No"
        >
          <Button className="w-full border-none text-[--color-grey-800]" disabled={isDeletingList}>Remove this list</Button>
        </Popconfirm>
      ),
      key: '5',
    },
  ];

  return (
    list && <>
      <Droppable droppableId={list?.id.toString()} isCombineEnabled key={list?.id} direction='vertical' type="ROW">
        {(provided) => (
          <div className="ml-4 h-fit rounded-lg bg-[--color-grey-0] p-4">
            <ListHeader list={list} items={items} />
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="min-h-[10px] w-[270px]"
            >
              {list?.cardsOrder?.map((id, index) => {
                const card = list?.cards?.find(card => card.id === id)
                return (
                  <Draggable draggableId={"CARD-" + id.toString()} index={index} key={id}>
                    {
                      (provided) => (
                        <Card
                          listId={list?.id}
                          boardId={list?.boardId}
                          card={card}
                          index={index}
                          setMoveCardId={setMoveCardId}
                          provided={provided}
                          setOpenCardDetailModal={setOpenCardDetailModal}
                        />
                      )
                    }
                  </Draggable>
                )
              })}
              {provided.placeholder}
              <AddCardSection
                isAddCard={isAddCard}
                setIsAddCard={setIsAddCard}
                listId={list?.id}
                boardId={list?.boardId}
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
        moveCardId={moveCardId}
        setMoveCardId={setMoveCardId}
        currentListId={list?.id}
        boardId={list?.boardId}
        lists={lists}
        setLists={setLists}
      />
    </>
  );
}

export default List;
