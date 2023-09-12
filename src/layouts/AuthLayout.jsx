import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 min-h-[100vh] flex-1 flex justify-center items-center flex-col overflow-auto overflow-x-hidden px-52 py-16">
        <div className="bg-white-900 flex-1 w-full rounded-lg">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
