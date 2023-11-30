import { MdOutlinePeopleOutline } from 'react-icons/md';
import { TbTable, TbTemplate } from 'react-icons/tb';
import ItemRow from '../../../ui/ItemRow';

const items = [
  {
    id: 1,
    icon: <TbTable />,
    title: 'Create board',
    des: 'A board is made up of cards arranged in a list. Use boards to manage projects, track information or organize just about anything.',
    children: {
      title: 'Create board',
      component: 'CreateBoard',
    },
  },
  {
    id: 2,
    icon: <TbTemplate />,
    title: 'Start with a template',
    des: 'Get started faster with table templates.',
    children: {
      component: 'TemplatesList',
      title: 'Create from template',
    },
  },
  {
    id: 3,
    icon: <MdOutlinePeopleOutline />,
    title: 'Create a workspace',
    des: 'A workspace is a collection of boards and people. Use Workspaces to organize your company, support busy people, family or friends',
  },
];

function CreateList({ setCreateHistory, setOpenModal }) {
  return items.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      onClick={() => {
        if (item.id <= 2) setCreateHistory((prev) => [...prev, item.children]);
        else if (item.id === 3) setOpenModal(true);
      }}
    />
  ));
}

export default CreateList;
