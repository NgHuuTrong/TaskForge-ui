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

function Header() {
  return (
    <header className="fixed top-[0] left-[0] w-full h-[52px] flex justify-between items-center z-10 border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50] p-[8px]">
      <div className="flex items-center gap-[0.4rem]">
        <Button type="icon" size="small">
          <CgMenuGridR size={20} color="var(--color-grey-500)" />
        </Button>
        <Button to="/" type="text" size="small">
          <h1 className="text-[1.8rem] font-bold">TaskForge</h1>
        </Button>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <CreateBtn />
      </div>
      <div className="flex justify-end items-center gap-[0.4rem] w-full">
        <Input className="w-[15rem] text-xl [transition:width_.5s_ease-in-out] focus:w-[88%]" placeholder="Search" />
        <Notifications />
        <UserSetting />
      </div>
    </header>
  );
}

export default Header;
