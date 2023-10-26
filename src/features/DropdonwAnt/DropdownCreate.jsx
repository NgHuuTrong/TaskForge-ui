import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { TbTemplate, TbTable } from 'react-icons/tb';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import Modal from '../../ui/Modal';
import workspacebg from '../../assets/workspacebg.png';

const DropdownCreate = ({ title }) => {
  const [openModalWorkspace, setOpenModalWorkspace] = useState(false);
  const [openModalAddMember, setOpenModalAddMember] = useState(false);

  function handleClick(id) {
    if (id === 3) {
      setOpenModalWorkspace(true);
    } else if (id === 2) {
      setOpenModalAddMember(true);
    }
    // else if (id === 1)
    else return;
  }

  function CommonItem(item) {
    const { icon, title, des, id } = item;
    return (
      <div
        className="my-2 flex max-w-md flex-col justify-center"
        onClick={() => handleClick(id)}
      >
        <div className="flex flex-row items-center font-semibold">
          {icon}
          <div className="ml-3">{title}</div>
        </div>
        <div className="text-[0.9em]">{des}</div>
      </div>
    );
  }
  const items = [
    {
      id: 1,
      icon: <TbTable />,
      title: 'Create table',
      des: 'A board is made up of cards arranged in a list. Use boards to manage projects, track information or organize just about anything.',
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

  const menuProps = {
    items: items.map((item) => {
      return {
        key: item.id,
        label: CommonItem(item),
      };
    }),
  };

  return (
    <>
      {/* MODAL */}
      <div>
        <Modal
          openModal={openModalWorkspace}
          setOpenModal={setOpenModalWorkspace}
          size={'large'}
        >
          <ModalWorkspaceChildren background={workspacebg} />
        </Modal>
        <Modal
          openModal={openModalAddMember}
          setOpenModal={setOpenModalAddMember}
          size={'small'}
        >
          <ModalAddMember />
        </Modal>
      </div>

      {/* DROPDOWN */}
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={
            'mr-1 flex h-11 rounded bg-[--header-button-txt-hovered] p-2 text-lg font-semibold text-[--color-grey-0] hover:bg-[--header-button-hovered-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]'
          }
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className="text-[1.3rem]">
              {title}
            </Space>
          </span>
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownCreate;

const ModalWorkspaceChildren = ({ background }) => {
  const [workspaceName, setWorkspaceName] = useState('');
  return (
    <div className="flex w-full flex-row">
      <div className="flex flex-col px-20 py-10">
        <div className="mt-10 flex flex-col">
          <div className="text-4xl font-medium">
            Let&apos;s build a Workspace
          </div>
          <span className="text-xl text-[--color-grey-400]">
            Increase your productivity by making it easy for everyone to access
            boards in one location.
          </span>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="my-10">
            <div className="text-lg">Workspace Name</div>
            <div className="flex max-w-xl">
              <input
                type="text"
                placeholder="Taco's company"
                className="w-[30rem] rounded-md border-[0.2rem] p-2 text-base outline-none transition-colors duration-500 focus:border-[var(--header-button-txt-hovered)]"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>
            <span className="text-base text-[--color-grey-400]">
              This is the name of your company, group or organization.
            </span>
          </div>
          <div className="my-auto">
            <div className="text-lg">
              Description Workspace
              <span className="text-[--color-grey-400]"> Options</span>
            </div>
            <div className="flex max-w-xl">
              <textarea
                className="w-[30rem] rounded-md border-[0.2rem] p-2 text-base outline-none transition-colors duration-500 focus:border-[var(--header-button-txt-hovered)]"
                cols="40"
                rows="5"
                placeholder="Our team organizes everything here"
              ></textarea>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <span className="text-base text-[--color-grey-400]">
              Put your members on a board with a short description of your
              Workspace.
            </span>
            <button
              className={`h-16 w-[30rem] text-xl transition-colors duration-500 ${
                workspaceName.length > 0
                  ? ' bg-[--header-button-txt-hovered] text-white'
                  : ' cursor-not-allowed bg-[--color-grey-100] text-[--color-grey-400]'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <div
        className={`ml-auto flex h-full w-full bg-[url(${background})]`}
        style={{
          background: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

const ModalAddMember = () => {
  const [memberName, setMemberName] = useState('');

  return (
    <div className="relative mt-10 flex w-full flex-col px-8">
      <div>Welcome to the Workspace</div>
      <div className="mt-10 flex w-full">
        <input
          type="text"
          placeholder="Email or name"
          className={`flex rounded-md border-[0.2rem] p-2 text-base outline-none transition-colors  [transition:width_.5s_ease-in-out] focus:border-[var(--header-button-txt-hovered)] ${memberName.length > 0 ? ' w-[32rem] border-[--header-button-txt-hovered]' : ' w-full'}`}
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />

          <button
            className={`flex justify-center items-center absolute right-16 py-2 px-6 w-[10rem] text-xl text-white transition-colors duration-1000 rounded-lg ${
              memberName.length > 0
                ? ' bg-[--header-button-txt-hovered] text-white visible '
                : ' invisible '
            }`}
          >
            Continue
          </button>
      </div>
    </div>
  );
};
