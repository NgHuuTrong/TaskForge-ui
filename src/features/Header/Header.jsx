import { CgMenuGridR } from 'react-icons/cg';

import Input from '../../ui/Input';
import Button from '../../ui/Button';

import Workspaces from './Workspaces';
import Recent from './Recent';
import Starred from './Starred';
import Templates from './Templates';
import CreateBtn from './CreateBtn';
import Notifications from './Notifications';
import UserSetting from './UserSetting';
import logo from '../../assets/logo_blue.png';

function Header() {
  return (
    <header className="fixed top-[0] left-[0] w-full h-[52px] flex justify-between items-center z-10 border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50] p-[8px]">
      <div className="flex items-center">
        <Button type="icon" size="small">
          <CgMenuGridR size={20} color="var(--color-grey-500)" />
        </Button>
        <Button to="/" type="icon" size="small">
          <img src={logo} alt="logo" className="w-36 object-contain" />
        </Button>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <CreateBtn />
      </div>
      <div className="flex items-center">
        <Input
          classNames="w-[15rem] rounded-md text-lg outline-none [transition:width_.5s_ease-in-out] focus:w-[40rem] focus:border-[var(--color-brand-600)]"
          placeholder="Search"
        />
        <Notifications />
        <UserSetting />
      </div>
    </header>
  );
}

export default Header;
