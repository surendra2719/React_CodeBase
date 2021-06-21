// import React from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Header from "./Header"
const { Content } = Layout;
const LayoutWithRoute = (props: any) => {
  const { children } = props;
  return (
    <>
    <Header/> 
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Content style={{ margin: '20px 16px' }}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
    </>
  );
};

export default LayoutWithRoute;
