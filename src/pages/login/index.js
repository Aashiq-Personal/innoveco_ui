import React from 'react';

import InnovecoLogo from '../../assets/innovecos_logo.png';
import LoginImage from '../../assets/login.png';

import LoginForm from './loginForm';

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div className="">
          <img src={InnovecoLogo} width={150} height={100} alt="logo"></img>
          <div className="mt-8">
            <img
              src={LoginImage}
              width={500}
              height={800}
              alt="loginImage"
            ></img>
          </div>
        </div>
        <div className="w-full">
          <div className="flex-cols  text-justify">
            <p className="text-blue-900 text-h4 font-bold ">
              Welcome to IntDoc
            </p>
            <p className="text-grey-800">
              Start managing your documents transactions faster 🚀 and better.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
