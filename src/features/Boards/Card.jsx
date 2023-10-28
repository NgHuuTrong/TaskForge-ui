import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardHeader from './card/CardHeader';
import CardItem from './card/CardItem';
import CopyListModal from './card/CopyListModal';
import MoveListModal from './card/MoveListModal';
import AddCardSection from './card/AddCardSection';
import MoveItemModal from './card/MoveItemModal';

function Card({
  col,
  addCardItem,
  copyList,
  columns,
  moveList,
  deleteAllTasks,
  deleteList,
  moveItemToAnotherList,
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
          onClick={() => setIsCopyModalOpen(true)}
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
          onClick={() => setIsMoveListModalOpen(true)}
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
          onConfirm={() => deleteAllTasks(col.id)}
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
          onConfirm={() => deleteList(col.id)}
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

  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isMoveListModalOpen, setIsMoveListModalOpen] = useState(false);
  const [isAddCard, setIsAddCard] = useState(false);
  const [listMoveTo, setListMoveTo] = useState(col.id);
  const [copyListName, setCopyListName] = useState('');
  const [moveItem, setMoveItem] = useState('');
  const handleCopyList = () => {
    if (copyListName == '') {
      return;
    }
    copyList(copyListName, col.list);
    setCopyListName('');
    setIsCopyModalOpen(false);
  };

  const handleMoveList = () => {
    if (listMoveTo != col.id) {
      moveList(col.id, listMoveTo);
    }
    setIsMoveListModalOpen(false);
  };

  const handleMoveItem = () => {
    if (listMoveTo != col.id) {
      moveItemToAnotherList(col.id, listMoveTo, moveItem);
    }
    setMoveItem('');
  };

  return (
    <>
      <Droppable droppableId={col.id} key={col.id}>
        {(provided) => (
          <div className="ml-4 rounded-lg bg-[#f1f2f4] p-4">
            <CardHeader id={col.id} items={items}></CardHeader>
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-[270px]"
            >
              {col.list.map(({ description, userImage }, index) => (
                <Draggable draggableId={description} index={index} key={index}>
                  {(provided) => (
                    <CardItem
                      id={index}
                      setMoveItem={setMoveItem}
                      provided={provided}
                      description={description}
                      userImage={userImage}
                    ></CardItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            <AddCardSection
              addCardItem={addCardItem}
              isAddCard={isAddCard}
              setIsAddCard={setIsAddCard}
              listId={col.id}
            ></AddCardSection>
          </div>
        )}
      </Droppable>
      <CopyListModal
        isCopyModalOpen={isCopyModalOpen}
        handleCopyList={handleCopyList}
        setIsCopyModalOpen={setIsCopyModalOpen}
        setCopyListName={setCopyListName}
        copyListName={copyListName}
      ></CopyListModal>
      <MoveListModal
        isMoveListModalOpen={isMoveListModalOpen}
        setIsMoveListModalOpen={setIsMoveListModalOpen}
        setListMoveTo={setListMoveTo}
        listMoveTo={listMoveTo}
        handleMoveList={handleMoveList}
        columns={columns}
      ></MoveListModal>
      <MoveItemModal
        moveItem={moveItem}
        setMoveItem={setMoveItem}
        setListMoveTo={setListMoveTo}
        handleMoveItem={handleMoveItem}
        listMoveTo={listMoveTo}
        columns={columns}
      ></MoveItemModal>
    </>
  );
}

export default Card;
