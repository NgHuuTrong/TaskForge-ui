import { Input } from 'antd';
import { CgMenuGridR } from 'react-icons/cg';

import Workspaces from './Workspaces';
import Recent from './Recent';
import Starred from './Starred';
import Templates from './Templates';
import Notifications from './Notifications';
import UserSetting from './UserSetting';
import CreateBtn from './CreateBtn';
import Button from '../../ui/Button';
import MoreBtn from './MoreBtn';

function Header() {
  return (
    <header className="fixed top-[0] left-[0] w-full max-h-[50px] flex justify-between items-center z-10 border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50] p-[8px]">
      <div className="flex items-center gap-[0.4rem]">
        <Button type="icon" size="small">
          <CgMenuGridR size={20} color="var(--color-grey-500)" />
        </Button>
        <Button to="/" type="text" size="small">
          <h1 className="text-[1.8rem] font-bold">TaskForge</h1>
        </Button>
        <div className="hidden md:flex">
          <Workspaces />
        </div>
        <div className="hidden lg:flex">
          <Recent />
        </div>
        <div className="hidden xl:flex">
          <Starred />
        </div>
        <div className="hidden 2xl:flex">
          <Templates />
        </div>
        <div className="2xl:hidden ">
          <MoreBtn />
        </div>
        <CreateBtn />
      </div>
      <div className="flex justify-end items-center gap-[0.4rem] w-full">
        <Input className="hidden md:flex w-[15rem] text-xl [transition:width_.5s_ease-in-out] focus:w-[88%]" placeholder="Search" />
        <Notifications />
        <UserSetting />
      </div>
    </header>
  );
}

export default Header;
