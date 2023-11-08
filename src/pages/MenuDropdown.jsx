import { useState } from 'react';
import MyDropdown from '../ui/MyDropdown';
import { TbTable, TbTemplate } from 'react-icons/tb';
import { MdArrowBackIosNew, MdClose, MdOutlinePeopleOutline } from 'react-icons/md';
import CreateBoard from '../features/Header/CreateBoard';
import Button from '../ui/Button';

const items = [
  {
    id: 1,
    icon: <TbTable />,
    title: 'Create board',
    des: 'A board is made up of cards arranged in a list. Use boards to manage projects, track information or organize just about anything.',
    children: {
      title: 'Create board',
      component: <CreateBoard />,
    },
  },
  {
    id: 2,
    icon: <TbTemplate />,
    title: 'Start with a template',
    des: 'Get started faster with table templates.',
  },
  {
    id: 3,
    icon: <MdOutlinePeopleOutline />,
    title: 'Create a workspace',
    des: 'A workspace is a collection of boards and people. Use Workspaces to organize your company, support busy people, family or friends',
  },
];
function ItemCreateBtn({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center hover:bg-[--color-grey-200] px-[12px] py-[6px] cursor-pointer"
    >
      <div className="flex items-center font-[400] text-[--color-grey-600]">
        {item.icon}
        <p className="ml-3">{item.title}</p>
      </div>
      <p className="text-[12px] text-[--color-grey-500] leading-[16px] mt-[4px]">{item.des}</p>
    </div>
  );
}

function Header({ title, onBack, onHide }) {
  return (
    <header className="absolute top-[0] left-[0] h-[4.5rem] flex items-center justify-between z-10 w-full">
      <Button type="icon" onClick={onBack}>
        <MdArrowBackIosNew />
      </Button>
      <h4 className="text-[1.4rem] font-bold text-[--color-grey-500]">{title}</h4>
      <Button type="icon" onClick={onHide}>
        <MdClose />
      </Button>
    </header>
  );
}

function MenuDropdown({ openCreateWorkspaceModal }) {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([{ items: items }]);
  const current = history[history.length - 1];
  // useEffect(() => {
  //   setHistory([{ items: items }]);
  // }, []);
  console.log('current', current);
  const renderItems = () => {
    console.log(current);
    if (current.component) return current.component;
    if (current.items)
      return current.items.map((item) => {
        return (
          <ItemCreateBtn
            key={item.id}
            item={item}
            onClick={() => {
              item.children && setHistory((prev) => [...prev, item.children]);
              if (item.id === 3) openCreateWorkspaceModal();
            }}
          />
        );
      });
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, -1));
  };

  // Back to first menu
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
    setOpen((prev) => !prev);
  };

  return (
    <MyDropdown
      open={open}
      onOpenChange={handleResetMenu}
      title="Create"
      type="primary"
      hasChevron={false}
      render={
        <div className="mt-4 w-[304px] relative rounded-xl bg-[--color-grey-0] py-3 border border-[--color-grey-300] overflow-hidden">
          {current.title && <Header title={current.title} onBack={handleBackMenu} onHide={handleResetMenu} />}
          <div style={{ marginTop: current.title && '4.5rem', overflow: 'hidden auto', maxHeight: '70vh' }}>
            {renderItems()}
          </div>
        </div>
      }
    />
  );
}

export default MenuDropdown;
