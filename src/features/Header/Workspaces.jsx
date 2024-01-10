import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import Heading from '../../ui/Heading';
import Logo from '../../ui/Logo';
import Button from '../../ui/Button';
import { useWorkspaces } from '../../hooks/useWorkspace';
import Spinner from '../../ui/Spinner';

const WorkspaceItem = ({ workspace }) => {
  return (
    <div className="py-2 bg-inherit">
      <ButtonImage
        height="48px"
        title={workspace.name}
        to="/"
        hasStarred={false}
        type="custom"
        custom={
          <div className="mr-[1.2rem] font-bold">
            <Logo bgImage={workspace.bg || 'linear-gradient(#4bce97,#216e4e)'} bgSrc={workspace.bg}>
              {workspace.name[0].toUpperCase()}
            </Logo>
          </div>
        }
      />
    </div>
  );
};

const Workspaces = () => {
  const { workspaces, isLoading } = useWorkspaces();
  return (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentElement}
      trigger={['click']}
      dropdownRender={() => {
        if (isLoading) return <Spinner />;
        return (
          <div className="w-[296px]">
            <Heading as="h5" classNames="p-4">
              Current Workspace
            </Heading>
            <WorkspaceItem workspace={workspaces[0]} />
            <Heading as="h5" classNames="p-4">
              Your Workspaces
            </Heading>
            {workspaces.map((workspace) => (
              <WorkspaceItem key={workspace.id} workspace={workspace} />
            ))}
          </div>
        );
      }}
    >
      <Button type="icon" size="normal" classNames="w-full flex justify-between">
        Workspaces
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Workspaces;
