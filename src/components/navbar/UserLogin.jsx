import React from 'react';

const UserLogin = () => {
	return (
		<div className='hidden md:flex md:space-x-2'>
			<a
				href='/register'
				className='w-full text-blue-800 hover:text-blue-600 border border-blue-800 hover:outline-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:outline-blue-700 dark:focus:ring-blue-800'
			>
				Register
			</a>
			<a
				href='login'
				className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
			>
				Login
			</a>
		</div>
	);
};

export default UserLogin;
