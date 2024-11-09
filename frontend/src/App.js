// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AssistanceProvider } from './context/AssistanceContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import RequestAssistance from './pages/RequestAssistance';
import TrackAssistance from './pages/TrackAssistance';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <AssistanceProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-assistance" element={<RequestAssistance />} />
          <Route path="/track-assistance" element={<TrackAssistance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AssistanceProvider>
  );
}

export default App;
