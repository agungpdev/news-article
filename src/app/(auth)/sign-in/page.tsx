'use client';

import { Card, Layout, Typography } from 'antd';
import React from 'react';

const AuthPage = () => {
  return (
    <Layout>
      <Card>
        <p>Logo</p>
        <Typography.Title level={4}>Sign in with email</Typography.Title>
        <Typography.Paragraph>
          Make a new doc to bring your words, data, and teams together. For free
        </Typography.Paragraph>
      </Card>
    </Layout>
  );
};

export default AuthPage;
