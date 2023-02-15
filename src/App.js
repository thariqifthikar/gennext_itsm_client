import React from 'react'
import './../src/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Navbar/pages/Dashboard';
import Servicedesk from './Components/Navbar/pages/Servicedesk.jsx';
import Messages from './Components/Navbar/pages/Messages.jsx';
import Notifications from './Components/Navbar/pages/Notifications.jsx';
import Mysettings from './Components/Navbar/pages/Mysettings.jsx';
import Logout from './Components/Navbar/pages/Logout.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/servicedesk" element={<Servicedesk />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/mysettings" element={<Mysettings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
 
};

export default App;



