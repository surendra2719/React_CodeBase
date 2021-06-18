import  { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined,TeamOutlined,} from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UseAuth } from '../../contexts/AuthContext';
const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const History = useHistory()
  const Auth = UseAuth();
  const onCollapse = (collapsed: any) => setCollapsed(collapsed);
  return (
    <>
      <button onClick={async () => { await Auth?.logout(); History.push("/signIn") }}  >Logout</button>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/">
            <HomeOutlined />
            <span>Menu</span>
            <Link to="/Menu"></Link>
          </Menu.Item>

          <Menu.Item key="/Profile">
            <TeamOutlined />
            <span>Profile</span>
            <Link to="/Profile"></Link>
          </Menu.Item>

          {/* <Menu.Item key="/counter">
          <DashboardOutlined />
          <span>Counter</span>
          <Link to="/counter"></Link>
        </Menu.Item>  */}
        </Menu>
      </Sider>
    </>
  );
};

export default App;
