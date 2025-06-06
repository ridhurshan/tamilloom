import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
