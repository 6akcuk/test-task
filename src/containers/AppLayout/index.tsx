import React, { useCallback } from 'react';
import { useMatch } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Avatar, Col, Layout, Menu, Row, Typography } from 'antd';

import { selectAvatar, selectRole, selectUsername } from '../../store/auth/selectors';

import './index.css';

const { Header, Sider, Content } = Layout;
const { Text, Title } = Typography;

const AppLayout: React.FC = ({ children }) => {
  const avatar = useSelector(selectAvatar);
  const username = useSelector(selectUsername);
  const role = useSelector(selectRole);
  const isDashboard = useMatch('/dashboard');
  const navigate = useNavigate();

  const handleDashboardClick = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  const handleSettingsClick = useCallback(() => {
    navigate('/settings');
  }, [navigate]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Title level={2} className="AppLayout__logo">Test Task</Title>
        <Menu
          theme="dark"
          selectedKeys={[isDashboard ? "dashboard" : "settings"]}
        >
          <Menu.Item
            key="dashboard"
            onClick={handleDashboardClick}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="settings"
            onClick={handleSettingsClick}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="AppLayout__header">
          <Row justify="end">
            <Col>
              <Row align="middle">
                <Col className="AppLayout__header-avatar">
                  <Avatar src={avatar} />
                </Col>
                <Col>
                  <Text strong>{username}</Text>
                  <Text type="secondary"> {role}</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content className="AppLayout__content">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
};

export default AppLayout;
