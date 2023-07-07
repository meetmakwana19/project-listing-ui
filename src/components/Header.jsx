import React from 'react';
import Logo from './navbar/Logo';
import NavMenu from './navbar/NavMenu';

const Header = () => {
	return (
		<div className='antialiased fixed w-full bg-white z-10 shadow-sm max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-4 border-b-[1px]'>
			<div className='flex items-center justify-between gap-3 md:gap-0'>
				<Logo />
				<NavMenu />
				{/* USER MENU */}
			</div>
		</div>
	);
};

export default Header;
