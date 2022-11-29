import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
	<>
		<Nav>
			<NavLink to='/'>
				<h1>Golf Stats Tracker</h1>
			</NavLink>
			<Bars />
			<NavMenu>
				<NavLink to='/find-courses' activeStyle>
					Course Finder
				</NavLink>
				<NavLink to='/rankings' activeStyle>
					PGA Rankings
				</NavLink>
				<NavLink to='/about' activeStyle>
					About
				</NavLink>
				<NavLink to='/contact' activeStyle>
					Contact Us
				</NavLink>
				<NavBtn>
					<NavBtnLink to='/add-round'>Add Round</NavBtnLink>
				</NavBtn>
			</NavMenu>
		</Nav>
	</>
  )
}

export default Navbar;