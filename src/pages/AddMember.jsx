import React, { useState } from 'react';
import { Divider } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Select } from 'antd';
import projectImg from '../assets/project.jpeg';
import ExampleTest from '../features/example/ExampleTest';

const AddMember = () => {
  const [activated, setActivated] = useState(1);
  const [copied, setCopied] = useState(false);

  const workspaceMember = [
    {
      name: 'To Phuoc Hung',
      tag: '@tphung',
      avatar: projectImg,
      role: ['Admin'],
    },
    {
      name: 'Lam Khanh Hoa',
      tag: '@lkhoa',
      avatar: projectImg,
      role: ['Member'],
    },
  ];

  function CommonItem(item, type) {
    const { name, tag, avatar, role } = item;
    return (
      <div className="my-3 flex justify-between">
        <div className="flex">
          <div className="mr-5 object-contain">
            <img
              src={avatar}
              alt={'img-bg'}
              className="h-12 w-12 rounded-full bg-[--color-dark] bg-center object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <div className=" text-lg font-semibold text-[--color-grey-900]">{name}</div>
            <div className="text-base text-[--color-grey-600]">{tag}</div>
          </div>
        </div>
        <div>
          {type === 'workspace-members' ? (
            <Select
              defaultValue={role}
              style={{ width: 120 }}
              //   onChange={handleChange}
              options={[
                { value: 'Admin', label: 'Admin' },
                { value: 'Member', label: 'Member' },
                //   { value: 'Never', label: 'Never' },
              ]}
            />
          ) : type === 'guests' ? (
            <button className="my-1 flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[--color-grey-200] p-6 text-left text-base font-medium text-[--color-grey-900] transition-colors duration-300 focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]">
              Add to workspace
            </button>
          ) : type === 'processing' ? (
            <button className="my-1 flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[--color-grey-200] p-6 text-left text-base font-medium text-[--color-grey-900] transition-colors duration-300 focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]">
              Allow
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }

  const showCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // 5000 milliseconds = 5 seconds
  };

  const tabs = [
    {
      id: 1,
      title: 'Workspace members',
      children: (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-xl font-medium text-[--color-grey-900]">
              Workspace members
            </div>
            <span className="text- my-3 text-base">
              Members in the Workspace can view and join all visible Workspace
              boards and create new boards in the Workspace.
            </span>
          </div>
          <Divider />
          <div className="flex flex-col">
            <div className="text-xl font-medium text-[--color-grey-900]">
              Invite members to join you
            </div>
            <div className="my-3 flex justify-between">
              <div className=" mr-5 flex text-base">
                Anyone with the invite link can join this free Workspace. You
                can also disable and create a new invite link for this Workspace
                at any time.
              </div>
              <div className="relative flex flex-col">
                <div
                  className={` absolute -top-[3rem] z-10 flex h-11 items-center whitespace-nowrap rounded-xl bg-[#DCFFF1] px-6 text-base text-[#22A06B] transition-opacity duration-500  ${
                    copied ? ' opacity-100' : ' opacity-0'
                  }`}
                >
                  <AiOutlineCheckCircle
                    color="#22A06B"
                    size={14}
                    className="mr-1"
                  />{' '}
                  Link copied
                </div>
                <button
                  onClick={showCopied}
                  className="my-1 flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[--color-grey-200] p-6 text-left text-base font-medium text-[--color-grey-900] transition-colors duration-300 focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]"
                >
                  Invite by link
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col">
            {workspaceMember.map((mem) => CommonItem(mem, 'workspace-members'))}
          </div>
          <Divider />
        </div>
      ),
    },
    {
      id: 2,
      title: 'Guests',
      children: (
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col">
            <div className="text-xl font-medium text-[--color-grey-900]">Guests</div>
            <span className="my-3 flex text-base">
              Guests can only view and edit boards they are added to.
            </span>
            <Divider />
            <div className="text-xl font-medium text-[--color-grey-900]">
              Guests per table
            </div>
            <span className="my-3 text-base">
              Single-table guests are members of only one Workspace table.
            </span>
          </div>
          <Divider />
          {workspaceMember.map((mem) => CommonItem(mem, 'guests'))}
          <Divider />
        </div>
      ),
    },
    {
      id: 3,
      title: 'Requests',
      children: (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-xl font-medium text-[--color-grey-900]">Processing</div>
            <span className="my-3 text-base">
              These people have requested to join this Workspace. All members of
              the Workspace are admins and can edit Workspace settings.
            </span>
          </div>
          <Divider />
          {workspaceMember.map((mem) => CommonItem(mem, 'processing'))}
          <Divider />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col p-11">
      <div className="flex">Member</div>
      <div className="mt-5 flex">
        <div className="flex flex-col ">
          <div className=" px-6 text-base text-[--color-grey-500]">
            Member of Workspace tables
          </div>
          <div className="mr-10 mt-4 flex flex-col">
            {tabs.map((tab, index) => {
              const { id, title } = tab;
              return (
                <button
                  key={index}
                  onClick={() => setActivated(id)}
                  className={`my-1 flex h-11 w-[20rem] items-center whitespace-nowrap rounded-xl bg-[--color-grey-50] p-6 text-left text-lg font-medium text-[--color-grey-900] transition-colors duration-300 hover:bg-[--color-grey-200] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered] ${
                    activated === id ? '' : ''
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex w-full">
          {tabs.map((tab, index) => {
            const { id, children } = tab;
            if (id === activated)
              return (
                <div className="flex w-full" key={index}>
                  {children}
                </div>
              );
            return <></>;
          })}
        </div>
      </div>
      <ExampleTest />
    </div>
  );
};

export default AddMember;
