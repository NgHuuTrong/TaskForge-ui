import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import userImage3 from '../../assets/user3.png';
import Card from './Card';
import initialColumns from '../../assets/data/ListCardData.json';

function CardList() {
  let currentId = 5;
  const [columns, setColumns] = useState(initialColumns);

  const addCardItem = (listId, description) => {
    let list = columns[listId]?.list;
    list[list.length] = {
      id: currentId++,
      description: description,
      userId: 3,
      userImage: userImage3,
    };
    setColumns({ ...columns });
  };

  const copyList = (listId, itemList) => {
    const newColumns = {
      ...columns,
      listId: {
        id: listId,
        list: [...itemList],
      },
    };
    setColumns(newColumns);
  };

  const moveList = (originalListId, newListId) => {
    const originalList = columns[originalListId].list;
    const newList = columns[newListId].list;
    const resultList = newList.concat(originalList);
    columns[originalListId].list = [];
    columns[newListId].list = [...resultList];
    setColumns({ ...columns });
  };

  const deleteAllTasks = (listId) => {
    columns[listId].list = [];
    setColumns({ ...columns });
  };

  const deleteList = (listId) => {
    delete columns[listId];
    setColumns({ ...columns });
  };

  const moveItemToAnotherList = (originalListId, newListId, index) => {
    const item = columns[originalListId].list.splice(index, 1);
    columns[newListId].list.push(...item);
    setColumns({ ...columns });
  };

  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
    if (start === end) {
      const newList = start.list.filter((item, idx) => idx !== source.index);

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList,
      };

      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      const newStartList = start.list.filter(
        (item, idx) => idx !== source.index,
      );

      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-4 flex ">
        {Object.values(columns).map((col) => (
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
          ></Card>
        ))}
      </div>
    </DragDropContext>
  );
}

export default CardList;
