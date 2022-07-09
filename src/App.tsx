import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import Favourite from './components/favourite';

function App() {
  return (
      <Routes>
        <Route caseSensitive path="" element={<Home />} />
        <Route path="favourite" element={<Favourite />} />
      </Routes>
  );
}

export default App;
