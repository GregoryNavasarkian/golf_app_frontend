import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FindCoursesPage from './pages/FindCoursesPage';
import RankingsPage from './pages/RankingsPage';
import AddRoundPage from './pages/AddRoundPage';

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
				<Route path='/rankings' element={<RankingsPage/>}/>
				<Route path='/add-round' element={<AddRoundPage/>}/>
			</Routes>
		</main>
		
		<footer>
			<p className='footerText'>&copy; <i>{new Date().getFullYear()} Gregory Navasarkian</i></p>
		</footer>
	</Router>
	
  );
}

export default App;
