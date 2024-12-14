import React from 'react';
import { Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Main from './app/components/Main/Main';

import './App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/device-list' element={<Main />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
};

export default App;
