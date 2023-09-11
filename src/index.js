import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

//Module Imports
import './index.css';
import './globals.css';
import App from './App';
import { Providers } from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment key="main-fragment">
    <Providers>
      <div className="flex flex-col min-h-full">
        <App />
      </div>
    </Providers>
  </Fragment>
);

// ReactDOM.render(
//   <Fragment key="main-fragment">
//     <Providers>
//       <div className="flex flex-col min-h-full">
//         <App />
//       </div>
//     </Providers>
//   </Fragment>,
//   document.getElementById('root')
// );
