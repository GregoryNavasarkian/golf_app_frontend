import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FindCoursesPage from './pages/FindCoursesPage';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
	<Router>
    	<Navbar />
		<main>
			<Routes>
				<Route path='/' exact element={<HomePage/>}/>
				<Route path='/about' element={<AboutPage/>}/>
				<Route path='/contact' element={<ContactPage/>}/>
				<Route path='/find-courses' element={<FindCoursesPage/>}/>
			</Routes>
		</main>
		
		<footer>
			<p className='footerText'>&copy; <i>{new Date().getFullYear()} Gregory Navasarkian</i></p>
		</footer>
	</Router>
	
  );
}

export default App;
