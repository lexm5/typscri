import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import DeviceList from './pages/DeviceList';
import RegisterDevice from './pages/RegisterDevice';
import History from './pages/History';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/register" element={<RegisterDevice />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
