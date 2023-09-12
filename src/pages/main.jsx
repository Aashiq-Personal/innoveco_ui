import React from 'react';
import LoginPage from './login';
import { AuthLayout } from '../layouts';

const Main = (props) => {
  const { path } = props;
  let Content = '';

  switch (path) {
    case 'login': {
      Content = (
        <AuthLayout>
          <LoginPage />
        </AuthLayout>
      );
      break;
    }
  }
  return Content;
};

export default Main;
