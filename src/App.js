import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare, faCoffee, faBars, faUser,
} from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Details from './pages/Details';
import './styles/App.css';

library.add(fab, faCheckSquare, faCoffee, faBars, faUser);

function App() {
  return (
    <div className="App">
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
