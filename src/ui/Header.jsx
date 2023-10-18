import { CgMenuGridR } from 'react-icons/cg';
import DropdownAnt from '../components/DropdownAnt';
import { BellOutlined } from '@ant-design/icons';

function Header() {
  const items = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
  ];

  return (
    <header className="fixed w-screen items-center border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50]">
      <nav className="flex items-center justify-between px-[4.8rem] py-[1.2rem]">
        <button className="flex h-11 w-11 items-center justify-center rounded hover:bg-[--header-button-hovered] hover:text-[--header-button-color]">
          <span className="flex  items-center justify-center leading-none">
            <CgMenuGridR size={24} color="color-[#445471]" />
          </span>
        </button>
        <a
          href="/"
          className="relative block rounded px-4 hover:bg-[--header-button-hovered] hover:text-[--header-button-color]"
        >
          <div
            className="relative block h-11 w-24 bg-[url(https://trello.com/assets/d947df93bc055849898e.gif)] bg-contain bg-center bg-no-repeat py-2 hover:bg-[url(https://trello.com/assets/87e1af770a49ce8e84e3.gif)] hover:opacity-100"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(30%) sepia(53%) saturate(323%) hue-rotate(179deg) brightness(91%) contrast(88%)',
            }}
          />
        </a>
        <div className="flex basis-full">
          <div className="relative flex h-full shrink-0 flex-grow items-stretch">
            <div className="mx-1 flex">
              <DropdownAnt type={'header'} title={'Workspaces'} items={items} />
              <DropdownAnt type={'header'} title={'Recently'} items={items} />
              <DropdownAnt type={'header'} title={'Starred'} items={items} />
              <DropdownAnt type={'header'} title={'Sample'} items={items} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="mx-2">
            <input
              type="text"
              placeholder="Search"
              className="flex h-11 rounded-md border-[0.01rem] px-4 py-1 text-lg w-56 [transition:width_.5s_ease-in-out] focus:w-[40rem]"
            />
          </div>
          <div className='flex items-center justify-center h-11 w-11'>
            <BellOutlined
              rotate={45}
              className=""
              color="black"
            />
          </div>
          <div>
            <DropdownAnt type={'info'} title={'HP'} items={items}/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
