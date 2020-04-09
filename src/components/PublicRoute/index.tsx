import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { Col, Row } from 'antd';

import './index.css';

interface Props extends RouteProps {}

const PublicRoute: React.FC<Props> = ({ element, ...other}) => {
  return (
    <Route
      element={
        <Row align="middle" justify="center">
          <Col flex="400px" className="PublicRoute">
            {element}
          </Col>
        </Row>
      }
      {...other}
    />
  )
};

export default PublicRoute;
