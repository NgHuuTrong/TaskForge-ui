import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ManageUser from '../features/Admin/ManageUser';
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
        <div className="h-40"></div>
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
