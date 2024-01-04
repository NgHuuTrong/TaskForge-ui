import { useState } from 'react';
import { MdArrowBackIosNew, MdClose } from 'react-icons/md';
import Button from '../ui/Button';
import { Dropdown } from 'antd';

function Header({ title, onBack, onHide }) {
  return (
    <header className="absolute top-[0] left-[0] h-[4.5rem] flex items-center justify-between z-10 w-full">
      <Button type="icon" onClick={onBack}>
        <MdArrowBackIosNew />
      </Button>
      <h4 className="text-[1.4rem] font-bold whitespace-nowrap text-ellipsis overflow-hidden">{title}</h4>
      <Button type="icon" onClick={onHide}>
        <MdClose />
      </Button>
    </header>
  );
}

function MenuDropdown({ onBack, onReset, history, renderComponent, children, placement = 'bottomLeft' }) {
  const [open, setOpen] = useState(false);
  const current = history[history.length - 1];

  const handleBackMenu = () => {
    if (history.length > 1) onBack();
  };

  const handleResetMenu = () => {
    onReset();
    setOpen((prev) => !prev);
  };

  return (
    <Dropdown
      placement={placement}
      open={open}
      onOpenChange={handleResetMenu}
      //getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => (
        <div className="w-[304px]">
          {current.title && <Header title={current.title} onBack={handleBackMenu} onHide={handleResetMenu} />}
          <div style={{ marginTop: current.title && '4.5rem', overflow: 'hidden auto', maxHeight: '75vh' }}>
            {renderComponent(current.component)}
          </div>
        </div>
      )}
      overlayStyle={{ overflow: 'hidden' }}
    >
      {children}
    </Dropdown>
  );
}

export default MenuDropdown;
