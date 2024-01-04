import React, { useState } from 'react';
import { LogoutOutlined, UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ManageUser from '../features/Admin/ManageUser';
import ManageTemplate from '../features/Admin/ManageTemplate';
import Logo from '../assets/logo_red.png';
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
  getItem('User', '1', <UserOutlined />),
  getItem('Template', '2', <AppstoreOutlined />),
  getItem('Logout', '3', <LogoutOutlined />),
];

function Admin() {
  const [screen, setScreen] = useState('1');
  const handleSwitchScreen = ({ key }) => {
    setScreen(key);
  };
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="h-screen bg-[#001529] w-[160px]">
        <div className="p-8 mb-8">
          <img src={Logo} />
        </div>
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
