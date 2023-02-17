import React from 'react'
import './../src/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Containers/Dashboard';
import Servicedesk from './Containers/Servicedesk';
import Messages from './Containers/Messages';
import Notifications from './Containers/Notifications';
import Mysettings from './Containers/Mysettings' 
import Logout from './Containers/Logout';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Servicedesk" element={<Servicedesk />} />
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



