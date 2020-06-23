import React from 'react';
import './App.css';
import { Map } from './components/Map/Map.js'
import { SideBar } from './components/SideBar/SideBar';


export const App = () => {


  return (
    <div className="App">
      <SideBar />
      <Map />
    </div>
  );
}