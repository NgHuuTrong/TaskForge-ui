import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaMinus } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import ItemRow from '../../../ui/ItemRow';
import { useBoard, useUpdateBoard } from '../../../hooks/useBoard';
import Spinner from '../../../ui/Spinner';
import { Button } from 'antd';

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
    icon: <IoExitOutline />,
    title: 'Leave board',
    des: null,
    children: null
  },
  {
    id: 4,
    icon: <FaMinus />,
    title: 'Close board',
    des: null,
    children: null
  }
];

function MoreList({ setMoreHistory, background, boardId }) {
  const {isUpdating, updateBoard} = useUpdateBoard()
  const { isLoading, board } = useBoard();
  const handleCloseBoard = () => {
    console.log(boardId)
    updateBoard({ boardId, body: { closed: true } });
  }
  if (isLoading) return <Spinner />;

  return items.map((item) => {
    if (board.creatorId === 4 && item.title === 'Leave board') {
      return null;
    } 

    if(item.id === 4) {
      return <Button key={item.id} className="border-none flex items-center" onClick={()=>handleCloseBoard()}>{item.icon} <span className="ml-2">{item.title}</span></Button>
    }

    return (
      <ItemRow
        key={item.id}
        item={item}
        img={item.img && background}
        onClick={() => {
          setMoreHistory((prev) => [...prev, item.title]);
        }}
      />
    )
  });
}

export default MoreList;
