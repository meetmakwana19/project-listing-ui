import React from 'react';

const UserLogin = () => {
	return (
		<div className='hidden md:flex md:space-x-2'>
			<a
				href='login'
				className='w-full text-white bg-accent hover:bg-slate-300  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
			>
				Login
			</a>
			<a
				href='/register'
				className='w-full text-accent hover:text-accent border border-none bg-white shadow-sm
				 hover:outline-accent font-medium 
				 hover:bg-slate-200
				 rounded-lg text-sm px-5 py-2.5 text-center'
			>
				Register
			</a>
		</div>
	);
};

export default UserLogin;
