import React from 'react';
import {
  AppstoreOutlined,
  HomeOutlined,
  LayoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  HighlightOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { useWorkspaces } from '../../hooks/useWorkspace';
import Logo from '../../ui/Logo';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const renderItems = (workspaces, isLoading) => {
  const workspaceTabs = isLoading
    ? []
    : workspaces.map((workspace) =>
        getItem(
          <strong className="ml-4">{workspace.name}</strong>,
          'workspace' + workspace.id,
          <Logo size="small" bgImage="linear-gradient(#4bce97, #216e4e)">
            {workspace.name[0]}
          </Logo>,
          [
            getItem(
              <NavLink to={'/w/' + workspace.id + '/home'}>Boards</NavLink>,
              '/w/' + workspace.id + '/home',
              <AppstoreOutlined />,
            ),
            getItem('Highlights', '/w/' + workspace.id + '/highlights', <HighlightOutlined />),
            getItem(
              <NavLink to={'/w/' + workspace.id + '/members'}>Member</NavLink>,
              '/w/' + workspace.id + '/members',
              <UsergroupAddOutlined />,
            ),
            getItem('Settings', '/w/' + workspace.id + '/settings', <SettingOutlined />),
          ],
        ),
      );
  return [
    getItem(<NavLink to="/boards">Boards</NavLink>, '/boards', <AppstoreOutlined />),
    getItem('Templates', 'Templates', <LayoutOutlined />, [
      getItem(<NavLink to="/templates">Overview</NavLink>, '/templates'),
      getItem(<NavLink to="/templates/design">Design</NavLink>, '/templates/design'),
      getItem(<NavLink to="/templates/business">Business</NavLink>, '/templates/business'),
      getItem(<NavLink to="/templates/education">Education</NavLink>, '/templates/education'),
      getItem(<NavLink to="/templates/engineering">Engineering</NavLink>, '/templates/engineering'),
    ]),
    getItem(<NavLink to="/home">Home</NavLink>, '2', <HomeOutlined />),
    {
      type: 'divider',
    },
    getItem(<strong>Workspace</strong>, 'Workspace'),
    ...workspaceTabs,
  ];
};
const Sidebar = () => {
  const { workspaces, isLoading } = useWorkspaces();
  const { pathname } = useLocation();
  return (
    <Menu
      className="sticky top-[40px] max-h-[80%] hidden w-[27.6rem] flex-col px-[1rem] md:block overflow-y-auto overflow-x-hidden"
      defaultOpenKeys={['Templates']}
      items={renderItems(workspaces, isLoading)}
      mode={'inline'}
      selectedKeys={[pathname]}
    />
  );
};
export default Sidebar;
