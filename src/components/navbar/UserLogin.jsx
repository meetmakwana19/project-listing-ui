import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { MdOutlineLogout } from 'react-icons/md';

function UserLogin() {
	const [isOpen, setIsOpen] = useState(false);
	const token = localStorage.getItem('authToken');
	const orgToken = localStorage.getItem('isOrg');
	const devToken = localStorage.getItem('isDev');
	const dev_uid = localStorage.getItem('dev_uid');
	const logOut = () => {
		// console.log('yoooooo');
		localStorage.removeItem('authToken');
		localStorage.getItem("isOrg") ? localStorage.removeItem('isOrg') : null;
		localStorage.getItem("isDev") ? localStorage.removeItem('isDev') : null;
		localStorage.getItem("dev_uid") ? localStorage.removeItem('dev_uid') : null;
		token = null;
		orgToken = null;
		devToken = null;
		dev_uid = null;
	};
	// console.log('token is -----', token);
	return (
		<div className='flex items-center justify-end px-4'>
			<div className='inline-block items-center relative text-left'>
				<button
					type='button'
					className='flex text-3xl font-medium text-gray-700 hover:text-accent'
					id='menu-button'
					aria-expanded='false'
					aria-haspopup='true'
					onClick={() => setIsOpen(!isOpen)}
				>
					<RxAvatar />
				</button>
				{/* ----------for Logged Out Users------------------- */}

				{isOpen && !token && (
					<ul
						onClick={() => setIsOpen(!isOpen)}
						className='mobile-menu'
						aria-orientation='vertical'
					>
						<li className='py-1'>
							<Link
								to={'login'}
								className='mobile-item'
							>
								Login
							</Link>
						</li>
						<li>
							<Link
								to={'/register'}
								className='mobile-item'
							>
								Register
							</Link>
						</li>
					</ul>
				)}

				{/* ----------for Logged In Users------------------- */}
				{isOpen && token && (
					<ul
						onClick={() => setIsOpen(!isOpen)}
						className='mobile-menu'
						aria-orientation='vertical'
					>
						<li className='py-1'>
							{/*   ----------------------- TODO: Here Add a method to redirect to Dev or Org based on loggedIn user-------------  */}
							<Link
								to={'/developers/profile'}
								className='flex items-center justify-start gap-3 mobile-item'
							>
								<RxAvatar className='text-xl' /> My Account
							</Link>
						</li>
						<li className='py-1'>
							<Link
								to={'/'}
								className='mobile-item flex items-center justify-start gap-3 mobile-item'
								onClick={() => logOut()}
							>
								<MdOutlineLogout className='text-xl' /> Logout
							</Link>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export default UserLogin;
