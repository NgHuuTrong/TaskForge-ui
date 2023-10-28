import DropdownAnt from '../features/DropdonwAnt/DropdownAnt';
import logo from '../assets/logo_blue.png';
import { CgMenuGridR } from 'react-icons/cg';
import Input from './Input';
import Button from './Button';

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

  const workspaceData = [
    {
      id: 1,
      imageWorkspace: '',
      nameWorkspace: 'Van Hieu workspace',
      current: false,
      projects: [
        {
          id: 1,
          imageProject: '',
          nameProject: 'Project 1',
          starred: true,
        },
        {
          id: 2,
          imageProject: '',
          nameProject: 'Project 2',
          starred: true,
        },
      ],
    },
    {
      id: 2,
      imageWorkspace: '',
      nameWorkspace: 'Huu Trong workspace',
      current: false,
      projects: [],
    },
    {
      id: 3,
      imageWorkspace: '',
      nameWorkspace: 'Hai Nam workspace',
      current: true,
      projects: [
        {
          id: 1,
          imageProject: '',
          nameProject: 'Project 1',
          starred: true,
        },
        {
          id: 2,
          imageProject: '',
          nameProject: 'Project 2',
          starred: false,
        },
      ],
    },
    {
      id: 4,
      imageWorkspace: '',
      nameWorkspace: 'Khanh Hoa workspace',
      current: false,
      projects: [],
    },
    {
      id: 5,
      imageWorkspace: '',
      nameWorkspace: 'Phuoc Hung workspace',
      current: false,
      projects: [],
    },
  ];

  const templateData = [
    {
      id: 1,
      imageTemplate: '',
      nameTemplate: 'Meeting Agenda',
    },
    {
      id: 2,
      imageTemplate: '',
      nameTemplate: 'Company Overview',
    },
    {
      id: 3,
      imageTemplate: '',
      nameTemplate: 'Project manager',
    },
    {
      id: 4,
      imageTemplate: '',
      nameTemplate: 'Business manager',
    },
  ];
  const notiData = [
    {
      id: 1,
      img: '',
      title: 'Hoa invited you to his project',
      time: '1 hour before',
      read: true,
    },
    {
      id: 2,
      img: '',
      title: 'Nam edited your project',
      time: '4 hour before',
      read: false,
    },
    {
      id: 3,
      img: '',
      title: 'Trong edited your project',
      time: '2 hour before',
      read: true,
    },
  ];

  return (
    <header className="fixed top-[0] left-[0] w-full h-[52px] flex justify-between items-center z-10 border-b border-solid border-b-[--color-grey-300] bg-[--color-grey-50] p-[8px]">
      <div className="flex items-center">
        <Button type="icon" size="small">
          <CgMenuGridR size={20} color="var(--color-grey-500)" />
        </Button>
        <Button to="/" type="icon" size="small">
          <img src={logo} alt="logo" className="w-36 object-contain" />
        </Button>
        <DropdownAnt type={'workspaces'} title={'Workspaces'} items={workspaceData} />
        <DropdownAnt type={'recently'} title={'Recently'} items={items} />
        <DropdownAnt type={'starred'} title={'Starred'} items={workspaceData} />
        <DropdownAnt type={'sample'} title={'Templates'} items={templateData} />
        <DropdownAnt type={'create'} title={'Create new'} />
      </div>
      <div className="flex items-center">
        <Input
          classNames="w-[15rem] rounded-md text-lg outline-none [transition:width_.5s_ease-in-out] focus:w-[40rem] focus:border-[var(--color-brand-600)]"
          placeholder="Search"
        />
        <div className="flex">
          <DropdownAnt type={'noti'} items={notiData} />
        </div>
        <div className="flex">
          <DropdownAnt type={'info'} />
        </div>
      </div>
    </header>
  );
}

export default Header;
