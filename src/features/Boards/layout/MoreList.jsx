import { AiOutlineInfoCircle } from 'react-icons/ai';
import ItemRow from '../../../ui/ItemRow';

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
    title: 'Start with a template',
    des: 'Change the background to a different color, from an existing image or upload from your device.',
    children: {
      component: 'ChangeBackground',
      title: 'Change background',
    },
  },
];

function MoreList({ setMoreHistory, background }) {
  return items.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      img={item.img && background}
      onClick={() => {
        setMoreHistory((prev) => [...prev, item.children]);
      }}
    />
  ));
}

export default MoreList;
