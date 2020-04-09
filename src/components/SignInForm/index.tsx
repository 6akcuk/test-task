import React from 'react';

import { Button, Form, Input, Typography } from 'antd';
import { FormProps } from 'antd/es/form';

interface Props extends FormProps {
  processing: boolean;
}

export interface SignInFormValues {
  login: string
  password: string
}

const { Title } = Typography;

const SignInForm: React.FC<Props> = ({ processing, ...other }) => {
  return (
    <Form
      initialValues={{
        login: 'test@test.com',
        password: 'password',
      }}
      {...other}
    >
      <Title>Sign In</Title>
      <Form.Item
        name="login"
        rules={[
          { required: true },
          { type: 'email' },
        ]}
      >
        <Input
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true },
        ]}
      >
        <Input.Password
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        noStyle
      >
        <Button
          type="primary"
          htmlType="submit"
          loading={processing}
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
};

export default SignInForm;
