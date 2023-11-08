import React from 'react';
import MyDropdown from '../../ui/MyDropdown';
import ButtonImage from '../../ui/ButtonImage';
import Heading from '../../ui/Heading';

import workspaces from '../../data/workspaces.json';
import Logo from '../../ui/Logo';

const WorkspaceItem = ({ workspace }) => {
  return (
    <div className="py-2 bg-inherit">
      <ButtonImage
        height="48px"
        title={workspace.workspaceName}
        to="/"
        hasStarred={false}
        type="custom"
        custom={
          <div className="mr-[1.2rem] font-bold">
            <Logo bgImage={workspace.bg || 'linear-gradient(#4bce97,#216e4e)'} bgSrc={workspace.bg}>
              {workspace.workspaceName[0].toUpperCase()}
            </Logo>
          </div>
        }
      />
    </div>
  );
};

const Workspaces = () => {
  return (
    <MyDropdown
      title="Workspaces"
      render={
        <div className="mt-4 w-[296px] rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
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
      }
    />
  );
};

export default Workspaces;
