import React, { useRef, useState } from 'react';
import { LogoutOutlined, UserOutlined, AppstoreOutlined, BgColorsOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import ManageUser from '../features/Admin/ManageUser';
import ManageTemplate from '../features/Admin/ManageTemplate';
import Logo from '../assets/logo_red.png';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
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
  getItem('Change theme', '3', <BgColorsOutlined />),
  getItem('Logout', '4', <LogoutOutlined />),
];

function Admin({defaultKey}) {
  const [screen, setScreen] = useState(defaultKey);
  const navigate = useNavigate();
  const { toggleDarkMode } = useDarkMode();
  const handleSwitchScreen = ({ key }) => {
    if(key===defaultKey) {
      return
    }
    if(key==='1') {
      navigate('/admin/user')
      setScreen(key)
    }
    else if(key==='2') {
      navigate('/admin/theme')
      setScreen(key)
    }
    else if(key ==='3') {
      toggleDarkMode()
      return
    }
    else if(key==='4') {
      navigate('/admin/authenticate')
    }
  };
  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[--color-grey-50]">
      <div className="h-screen bg-[#001529] w-[160px]">
        <div className="p-8 mb-8">
          <img src={Logo} />
        </div>
        <div className="w-[150px]">
          <Menu
            defaultSelectedKeys={[defaultKey]}
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