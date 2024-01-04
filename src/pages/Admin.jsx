import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import ManageUser from '../features/Admin/ManageUser';
import { getUsers } from '../services/apiAdmin';
import ManageTemplate from '../features/Admin/ManageTemplate';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('User', '1', <PieChartOutlined />),
  getItem('Template', '2', <DesktopOutlined />),
  getItem('Logout', '3', <DesktopOutlined />),
];

function Admin() {
  const [screen, setScreen] = useState('1');
  const handleSwitchScreen = ({ key }) => {
    setScreen(key);
  };
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen bg-[#001529] w-[160px]">
        <p className="text-white text-4xl py-8 ml-8">Admin</p>
        <div className="w-[150px]">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items}
            onClick={(e) => handleSwitchScreen(e)}
          />
        </div>
      </div>
      {screen === '1' ? <ManageUser /> : <ManageTemplate />}
    </div>
  );
}
export default Admin;
// about blank
