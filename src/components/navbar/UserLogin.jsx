import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';

function UserLogin() {
	const [isOpen, setIsOpen] = useState(false);
	const token = localStorage.getItem('authToken');
	const logOut = () => {
		console.log('yoooooo');
		localStorage.removeItem('authToken');
		token = null;
	};
	console.log('token is -----', token);
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
							<Link
								to={'/'}
								className='mobile-item'
								onClick={() => logOut()}
							>
								Logout
							</Link>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export default UserLogin;
