'use client';

import React from 'react';
import { ConfigProvider } from 'antd';

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          
          colorPrimary: '#1677ff',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;