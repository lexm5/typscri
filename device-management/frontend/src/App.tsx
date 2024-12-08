import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DeviceList from './components/DeviceList/DeviceList';
import RegisterDevice from './components/RegisterDevice/RegisterDevice';
import './App.module.scss';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Device List</Link>
        <Link to="/register">Register Device</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/register" element={<RegisterDevice />} />
      </Routes>
    </Router>
  );
};

export default App;
