import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid';
import Login from './components/login';
// import Signup from './components/SignUp/SignUp';
import Register from './components/register';
// import x from './student.png'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Grid/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/login/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
