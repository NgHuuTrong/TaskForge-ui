import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import List from './List';
import AddNewListSection from './card/AddNewListSection';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardDetail from './card/CardDetail/CardDetail';
import { useMoveList } from '../../hooks/useList';
import { useMoveCardInList, useMoveCardToAnotherList } from '../../hooks/useCard';

function BoardContent({ id, lists, listsOrder, setLists, setListsOrder }) {
  const { isMoving: isMovingList, mutate: moveList } = useMoveList();
  const { isMoving: isMovingCardInList, mutate: moveCardInList } = useMoveCardInList();
  const { isMoving: isMovingCardAnotherList, mutate: moveCardAnotherList } = useMoveCardToAnotherList();
  const [openCardDetailModal, setOpenCardDetailModal] = useState(false);
  
  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    if (type === 'ROW') {
      if (destination === undefined || destination === null) return null;
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;

      if (source.droppableId === destination.droppableId) {
        const index = lists.findIndex(l => l.id === +source.droppableId);
        const cardId = lists[index].cardsOrder[source.index];

        lists[index].cardsOrder = lists[index].cardsOrder.filter(id => id !== cardId);
        lists[index].cardsOrder = [
          ...lists[index].cardsOrder.slice(0, destination.index),
          cardId,
          ...lists[index].cardsOrder.slice(destination.index)
        ]
        setLists([...lists]);

        moveCardInList({
          listId: +source.droppableId,
          cardId,
          newIndex: destination.index
        });

        return null;
      } else {
        const oldListIndex = lists.findIndex(l => l.id === +source.droppableId);
        const newListIndex = lists.findIndex(l => l.id === +destination.droppableId);
        const cardId = lists[oldListIndex].cardsOrder[source.index];
        const card = lists[oldListIndex].cards.find(c => c.id === cardId);

        lists[oldListIndex].cardsOrder = lists[oldListIndex].cardsOrder.filter(id => id !== cardId);
        lists[oldListIndex].cards = lists[oldListIndex].cards.filter(c => c.id !== cardId);
        lists[newListIndex].cards.push(card);
        lists[newListIndex].cardsOrder = [
          ...lists[newListIndex].cardsOrder.slice(0, destination.index),
          cardId,
          ...lists[newListIndex].cardsOrder.slice(destination.index)
        ]
        setLists([...lists]);

        moveCardAnotherList({
          cardId,
          body: {
            oldListId: +source.droppableId,
            newListId: +destination.droppableId,
            newIndex: destination.index
          }
        });

        return null;
      }
    }

    if (type === 'COLUMN') {
      if (destination === undefined || destination === null) return null;

      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;
      else {
        const sourceId = listsOrder[source.index];

        listsOrder = listsOrder.filter(id => id !== sourceId);
        setListsOrder([
          ...listsOrder.slice(0, destination.index),
          sourceId,
          ...listsOrder.slice(destination.index)
        ]);

        moveList(
          {
            boardId: id,
            listId: sourceId,
            newIndex: destination.index
          }
        );
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-4 flex">
        <Droppable
          droppableId={'outter'}
          key={'outter'}
          type="COLUMN"
          direction="horizontal"
          isDropDisabled={isMovingList || isMovingCardInList || isMovingCardAnotherList}
          isCombineEnabled
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-row"
            >
              {listsOrder?.map((id, index) => {
                const list = lists?.find(list => list.id === id)
                return (
                  <Draggable
                    draggableId={"LIST-" + list?.id.toString()}
                    index={index}
                    key={list?.id}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <List
                          list={list}
                          lists={lists}
                          setLists={setLists}
                          key={list?.id}
                          setOpenCardDetailModal={setOpenCardDetailModal}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
              {id && <AddNewListSection boardId={id} />}
            </div>
          )}
        </Droppable>
      </div>
      {
        openCardDetailModal && <CardDetail
          openCardDetailModal={openCardDetailModal}
          setOpenCardDetailModal={setOpenCardDetailModal}
          lists={lists}
        />
      }
    </DragDropContext>
  );
}

export default BoardContent;
