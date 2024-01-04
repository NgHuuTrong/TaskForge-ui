import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';

import Starred from './Starred';
import Templates from './Templates';
import Button from '../../ui/Button';
import MenuDropdown from '../../ui/MenuDropdown';
import WorkspacesContent from './WorkspaceContent';
import RecentContent from './RecentContent';
import StarredContent from './StarredContent';

const MoreList = ({ setMoreHistory }) => {
  return (
    <div className="w-[280px] ">
      <div className="md:hidden">
        <Button
          onClick={() => {
            setMoreHistory((prev) => [...prev, { title: null, component: 'Workspace' }]);
          }}
          type="icon"
          size="normal"
          classNames="w-full flex justify-between"
        >
          Workspaces
          <DownOutlined />
        </Button>
      </div>
      <div className="lg:hidden">
        <Button
          onClick={() => {
            setMoreHistory((prev) => [...prev, { title: null, component: 'Recent' }]);
          }}
          type="icon"
          size="normal"
          classNames="w-full flex justify-between"
        >
          Recent
          <DownOutlined />
        </Button>
      </div>
      <div className="xl:hidden">
        <Button
          onClick={() => {
            setMoreHistory((prev) => [...prev, { title: null, component: 'Starred' }]);
          }}
          type="icon"
          size="normal"
          classNames="w-full flex justify-between"
        >
          Starred
          <DownOutlined />
        </Button>
      </div>
      <div className="2xl:hidden">
        <Button
          onClick={() => {
            setMoreHistory((prev) => [...prev, { title: null, component: 'Templates' }]);
          }}
          type="icon"
          size="normal"
          classNames="w-full flex justify-between"
        >
          Templates
          <DownOutlined />
        </Button>
      </div>
    </div>
  );
};

const MoreBtn = () => {
  const [moreHistory, setMoreHistory] = useState([{ title: null, component: 'MoreList' }]);

  const renderComponent = (component) => {
    return (
      <>
        {component === 'MoreList' && <MoreList setMoreHistory={setMoreHistory} />}
        {component === 'Workspace' && <WorkspacesContent />}
        {component === 'Recent' && <RecentContent />}
        {component === 'Starred' && <StarredContent />}
        {component === 'Templates' && <Templates />}
      </>
    );
  };

  return (
    <MenuDropdown
      onBack={() => setMoreHistory((prev) => prev.slice(0, -1))}
      onReset={() => setMoreHistory((prev) => prev.slice(0, 1))}
      history={moreHistory}
      renderComponent={renderComponent}
    >
      <Button size="normal" type="icon" classNames="hover:bg-slate-600">
        More
        <DownOutlined />
      </Button>
    </MenuDropdown>
  );
};

export default MoreBtn;
