import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
	background: rgb(0, 35, 0);
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;
`

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
&.hover{
	font-weight: bolder;
}
&.active {
	color: #5c9037;
}
`

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

@media screen and (max-width: 768px) {
	display: none;
}
`

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #5c9037;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	text-decoration: none;
	margin-left: 24px;
	margin-right: 24px;

&:hover {
	transition: all 0.1s ease-in-out;
	background: #a0db75;
	color: #010606;
	font-weight: bold;
}
`