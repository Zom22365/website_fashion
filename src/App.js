import { useState } from 'react';
import {Routes, Route, useLocation}from 'react-router-dom';
import './App.css';
import AdminComponent from './routes/Admin';
import SiteComponent from './routes/Site';


function App() {

if(window.location.pathname.includes('/admin')){
  return <AdminComponent/>
}
  return<SiteComponent/>
  
}

export default App;
