import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import List from './List';
import AddNewListSection from './card/AddNewListSection';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { exchangeTwoList, getBoard, moveCardInList, moveCardToAnotherList } from './boardSlice';
import { useDispatch } from 'react-redux';
import CardDetail from './card/CardDetail/CardDetail';

function BoardContent() {
  const dispatch = useDispatch();
  const { content: lists } = useSelector(getBoard(123));

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
        dispatch(moveCardInList({
          listId: source.droppableId,
          originalIndex: source.index,
          newIndex: destination.index
        }));

        return null;
      } else {
        dispatch(moveCardToAnotherList({
          originalListId: source.droppableId,
          newListId: destination.droppableId,
          originalIndex: source.index,
          newIndex: destination.index
        }));

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

      if (source.index === destination.index) return null;
      else {
        dispatch(exchangeTwoList({
          sourceIndex: source.index,
          destinationIndex: destination.index
        }));
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-4 flex ">
        <Droppable
          droppableId={'outter'}
          key={'outter'}
          type="COLUMN"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-row"
            >
              {lists?.map((list, index) => (
                <Draggable
                  draggableId={list.id?.toString()}
                  index={index}
                  key={list.id}
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
                        key={list.id}
                        columns={lists}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddNewListSection />
            </div>
          )}
        </Droppable>
      </div>
      <CardDetail />
    </DragDropContext>
  );
}

export default BoardContent;
