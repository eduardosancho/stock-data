import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare, faCoffee, faBars, faUser,
} from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './features/navbar/NavigationBar';
import Home from './features/home/Home';
import StockPrice from './features/stockPrice/StockPrice';
import Details from './features/details/Details';
import './App.css';

library.add(fab, faCheckSquare, faCoffee, faBars, faUser);

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stockPrice" element={<StockPrice />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
