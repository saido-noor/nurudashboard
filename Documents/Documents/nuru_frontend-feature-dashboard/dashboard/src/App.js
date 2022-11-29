// import logo from './logo.svg';
import './App.css';
// import Sms from './components/sms/Sms';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './components/SmsFeatured/Features';
import Dashboard from './components/dashboard';
import Messages from './components/sms';
import Users from './components/users';
import Profile from './components/profile/Profile';
import List from './components/users/List';

function App() {
  return (
    // <Adduser/>
    < Router>
      <Routes>
      <Route path='/list' element={ <List/> } />
        <Route path='/dashboard' element={ <Dashboard/> } />
        <Route path='/features' element={ <Features/> } />
        <Route path='/sms' element={ <Messages/> } />
        <Route path='/users' element={ <Users/> } />
        <Route path='/profile' element={ <Profile/> } />

        


      </Routes>
    </Router>

  );
}

export default App;
