import React from 'react';
import { Link } from 'react-router-dom';

const navigations = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Projects',
		path: '/projects',
	},
	{
		name: 'Companies',
		path: '/companies',
	},
	{
		name: 'Developer',
		path: '/developers',
	},
];

const NavMenu = () => {
	return (
		<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
			{navigations.map((navigation) => {
				return (
					<Link
						to={navigation.path}
						className='mr-5 hover:text-gray-900'
					>
						{navigation.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default NavMenu;
