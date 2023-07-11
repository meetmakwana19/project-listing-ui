import React, { useEffect, useState } from 'react';
import Logo from './navbar/Logo';
import NavMenu from './navbar/NavMenu';
import UserLogin from './navbar/UserLogin';

const Header = () => {
	// Header Sticky
	const [navbar, setNavbar] = useState(false);
	useEffect(() => {
		return () => {
			window.addEventListener('scroll', changeBackground);
		};
	}, []);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	return (
		<div className={navbar ? 'header bg-white' : 'header bg-transparent'}>
			<Logo />
			<NavMenu />
			<UserLogin />
		</div>
	);
};

export default Header;
