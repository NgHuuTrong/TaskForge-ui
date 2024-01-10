import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { LuCreditCard } from "react-icons/lu";
import ItemRow from '../../../ui/ItemRow';
import { useBoard, useLeaveBoard, useUpdateBoard } from '../../../hooks/useBoard';
import Spinner from '../../../ui/Spinner';
import { useUser } from '../../../hooks/useAuthenticate';
import { useState } from 'react';

const items = [
  {
    id: 1,
    icon: <AiOutlineInfoCircle />,
    title: 'About this board',
    des: 'Add a description to your board.',
    children: {
      title: 'About this board',
      component: 'AboutBoard',
    },
  },
  {
    id: 2,
    img: true,
    title: 'Change background',
    des: null,
    children: {
      component: 'ChangeBackground',
      title: 'Change background',
    },
  },
  {
    id: 3,
    icon: <LuCreditCard />,
    title: 'My card',
    des: null,
    children: null,
  },
  {
    id: 4,
    icon: <IoExitOutline />,
    title: 'Leave board',
    des: null,
    children: null,
  },
  {
    id: 5,
    icon: <FaMinus />,
    title: 'Close board',
    des: null,
    children: null,
  },
];

function MoreList({ setMoreHistory, background, curMember, isMyCard, setIsMyCard }) {
  const { isLoading, board } = useBoard();
  const { updateBoard } = useUpdateBoard();
  const { mutate: leaveBoard } = useLeaveBoard();
  const { isLoading: isLoadingUser, user } = useUser();

  if (isLoading || isLoadingUser) return <Spinner />;

  return items.map((item) => {
    if ((!curMember || board.creatorId === user.id) && item.title === 'Leave board') {
      return null;
    } else if (board.creatorId !== user.id && item.title === 'Close board') {
      return null;
    } else if (!curMember && item.title === 'Change background') {
      return null;
    }

    return (
      <ItemRow
        key={item.id}
        item={item}
        img={item.img && background}
        onClick={() => {
          if (board.creatorId === user.id && item.title === 'Close board') {
            updateBoard({ boardId: board.id, body: { closed: true } });
          } else if (board.creatorId !== user.id && item.title === 'Leave board') {
            leaveBoard(board.id);
          } else if (item.title === "My card") {
            setIsMyCard(isMyCard => !isMyCard);
          } else {
            setMoreHistory((prev) => [...prev, item.children]);
          }
        }}
        isMyCard={isMyCard}
      />
    );
  });
}

export default MoreList;
