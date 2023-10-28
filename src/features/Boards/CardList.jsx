import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import userImage3 from '../../assets/user3.png';
import Card from './Card';
import initialColumns from '../../assets/data/ListCardData.json';
import AddNewListSection from './card/AddNewListSection';
import { Droppable, Draggable } from 'react-beautiful-dnd';
function CardList() {
  let currentId = 5;
  const [columns, setColumns] = useState(initialColumns);

  const addCardItem = (listId, description) => {
    const column = columns.find((col) => col.id === listId);
    if (!column) return;
    let list = column.list;
    list.push({
      id: currentId++,
      description: description,
      userId: 3,
      userImage: userImage3,
    });
    setColumns([...columns]);
  };

  const copyList = (listId, itemList) => {
    columns.push({ id: listId, list: [...itemList] });
    setColumns([...columns]);
  };

  const moveList = (originalListId, newListId) => {
    const originalColumn = columns.find(
      (column) => column.id === originalListId,
    );
    const newColumn = columns.find((column) => column.id === newListId);
    if (!newColumn || !originalColumn) return;
    const newList = newColumn.list.concat(originalColumn.list);
    originalColumn.list = [];
    newColumn.list = newList;
    setColumns([...columns]);
  };

  const deleteAllTasks = (listId) => {
    columns.find((column) => column.id === listId).list = [];
    setColumns([...columns]);
  };

  const deleteList = (listId) => {
    const newList = columns.filter((column) => column.id !== listId);
    setColumns([...newList]);
  };

  const moveItemToAnotherList = (originalListId, newListId, index) => {
    const item = columns
      .find((column) => column.id === originalListId)
      ?.list.splice(index, 1);
    columns.find((column) => column.id === newListId)?.list.push(...item);
    console.log(123);
    setColumns([...columns]);
  };

  const addNewList = (newListId) => {
    columns.push({
      id: newListId,
      list: [],
    });
    setColumns([...columns]);
  };

  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    console.log(result);
    if (type == 'ROW') {
      if (destination === undefined || destination === null) return null;

      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;
      const start = columns.find((column) => column.id === source.droppableId);
      const end = columns.find(
        (column) => column.id === destination.droppableId,
      );
      if (start === end) {
        const removeItem = start.list.splice(source.index, 1)[0];

        start.list.splice(destination.index, 0, removeItem);

        setColumns([...columns]);
        return null;
      } else {
        const removeItem = start.list.splice(source.index, 1)[0];
        end.list.splice(destination.index, 0, removeItem);

        setColumns([...columns]);
        return null;
      }
    } else if (type == 'COLUMN') {
      if (destination === undefined || destination === null) return null;

      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;
      const start = columns[source.index];
      const end = columns[destination.index];
      if (start === end) {
        return null;
      } else {
        const removeItem = columns.splice(source.index, 1)[0];
        columns.splice(destination.index, 0, removeItem);
        setColumns([...columns]);
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
              {columns.map((col, index) => (
                <Draggable
                  draggableId={col.id.toString()}
                  index={index}
                  key={col.id}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        col={col}
                        key={col.id}
                        addCardItem={addCardItem}
                        copyList={copyList}
                        columns={columns}
                        moveList={moveList}
                        deleteAllTasks={deleteAllTasks}
                        deleteList={deleteList}
                        moveItemToAnotherList={moveItemToAnotherList}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddNewListSection addNewList={addNewList}></AddNewListSection>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default CardList;
