import React from 'react';
import LoginPage from './login';
import { AuthLayout, MainLayout } from '../layouts';

const Main = (props) => {
  const { path } = props;
  let Child = '',
    isAuth = false,
    Parent = '';

  switch (path) {
    case 'login': {
      Child = <LoginPage />;
      isAuth = true;
      break;
    }
    case 'dashboard': {
      Child = <LoginPage />;
      break;
    }
  }
  Parent = isAuth ? (
    <AuthLayout>{Child}</AuthLayout>
  ) : (
    <MainLayout>{Child}</MainLayout>
  );
  return Parent;
};

export default Main;
