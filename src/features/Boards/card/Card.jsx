import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteCard, setCurrentCardDetail } from '../boardSlice';
import CardDetailMemberList from './CardDetail/CardDetailMemberList';

function Card({ listId, card, index, setMoveCard, provided }) {
  const { id, userImage, description } = card;
  const dispatch = useDispatch();

  return (
    <div
      className="group relative mb-2 flex w-full flex-col items-center rounded-lg bg-white p-4 pr-8 shadow-md hover:bg-sky-100"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={() => {
        dispatch(
          setCurrentCardDetail({
            listId,
            index,
            card,
          }),
        );
      }}
    >
      <p className="my-1 text-2xl">{description}</p>
      <div className="flex w-full justify-end">
        <CardDetailMemberList size={'small'}></CardDetailMemberList>
      </div>
      <div className="absolute left-full top-[1px] z-10 bg-white opacity-0 group-hover:opacity-100">
        <Button className="flex w-full items-center justify-center rounded-none border-none text-xl hover:bg-white">
          Edit
        </Button>
        <Button
          className="flex items-center justify-center rounded-none border-none text-xl hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            setMoveCard(index);
          }}
        >
          Move to
        </Button>
        <Button
          className="flex w-full items-center justify-center rounded-none border-none text-xl hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteCard({ listId, cardId: id }));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Card;
