import React from 'react';
// import Image from "next/image";

import InnovecoLogo from '../../assets/innovecos_logo.png';
// import MgtLogo from "@/assets/mgtLogo_crif.png";
import LoginImage from '../../assets/login.png';

import LoginForm from './loginForm';

const LoginPage = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 min-h-[100vh] flex-1 flex justify-center items-center flex-col overflow-auto overflow-x-hidden px-52 py-16">
        <div className="bg-white-900 flex-1 w-full rounded-lg">
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
              <div className="flex-cols text-justify">
                <p className="text-blue-900 text-h4 font-bold ">
                  Welcome to IntDoc
                </p>
                <p className="text-grey-800">
                  Start managing your transactions faster 🚀 and better.
                </p>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
