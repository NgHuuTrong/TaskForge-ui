import { CgMenuGridR } from 'react-icons/cg';
import DropdownAnt from '../features/DropdonwAnt/DropdownAnt';
import { BellOutlined } from '@ant-design/icons';
import logo from '../assets/logo_blue.png';

function Header({ color = 'primary', className = '' }) {
  const items = [
    {
      id: 1,
      img: '1',
      title: 'title 1',
      des: 'des 1',
    },
    {
      id: 2,
      img: '2',
      title: 'title 2',
      des: 'des 2',
    },
    {
      id: 3,
      img: '3',
      title: 'title 3',
      des: 'des 3',
    },
  ];

  return (
    <header className="fixed w-screen items-center border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50]">
      <nav className="flex items-center justify-between px-[4.8rem] py-[1.2rem]">
        {/* <button className="flex h-11 w-16 items-center justify-center rounded hover:bg-[--color-grey-200] hover:text-[--header-button-color]">
          <span className="flex  items-center justify-center leading-none">
            <CgMenuGridR size={24} color="color-[#445471]" />
          </span>
        </button> */}
        <a
          href="/"
          className="relative block rounded px-2 hover:bg-[--color-grey-200] hover:text-[--header-button-txt-hovered]"
        >
          <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
        </a>
        <div className="flex items-center basis-full">
          <div className="relative flex h-full shrink-0 flex-grow items-stretch">
            <div className="mx-1 flex items-center gap-[1rem]">
              <DropdownAnt type={'header'} title={'Workspaces'} items={items} />
              <DropdownAnt type={'header'} title={'Recently'} items={items} />
              <DropdownAnt type={'header'} title={'Starred'} items={items} />
              <DropdownAnt type={'header'} title={'Sample'} items={items} />
            </div>
          </div>
        </div>
        <div className="absolute right-11 flex items-center justify-evenly">
          <div className="mx-2">
            <input
              type="text"
              placeholder="Search"
              className="flex h-11 w-56 rounded-md border-[0.01rem] px-4 py-1 text-lg [transition:width_.5s_ease-in-out] focus:w-[40rem]"
            />
          </div>
          <div className="flex h-11 w-11 items-center justify-center">
            <BellOutlined
              rotate={45}
              className="cursor-pointer"
              color="black"
            />
          </div>
          <div>
            <DropdownAnt type={'info'} title={'HP'} items={items} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
