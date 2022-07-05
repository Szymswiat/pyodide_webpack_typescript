// Modified from the create-react-app TypeScript template
// See: https://github.com/facebook/create-react-app/blob/main/packages/cra-template-typescript/template/src/App.tsx
import React, { useEffect } from 'react';

import './app.css';

// @ts-ignore
import { loadPackage } from 'pyodide/load-package';
// @ts-ignore
import { loadPyodide } from 'pyodide/pyodide';
// @ts-ignore
import * as pyodide from 'pyodide/api';

import logo from './icons/logo.svg';

const App: React.FC = () => {
  useEffect(() => {
    loadPyodide();
  });

  return (
    <div className="app" role="main">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/app.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
