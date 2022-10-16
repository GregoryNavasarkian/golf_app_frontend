import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
	<Router>
    	<Navbar />
		<Routes>
			<Route path='/' exact element={<HomePage/>}/>
			<Route path='/about' element={<AboutPage/>}/>
		</Routes>
		<footer>
			<p className='footerText'>&copy; 2022 Gregory Navasarkian</p>
		</footer>
	</Router>
	
  );
}

export default App;
