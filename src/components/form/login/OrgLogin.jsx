import React from 'react';
import organization from '/organization.svg';
import { LoginContainer } from './LoginContainer';

export const OrgLogin = () => {
	return (
		<LoginContainer image={organization}>
			<div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
				<div className='relative'>
					<p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>
						UID
					</p>
					<input
						placeholder='Eg. org_41961242'
						type='text'
						className='border lowercase placeholder-gray-400 focus:outline-none
  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
  border-gray-300 rounded-md'
					/>
				</div>
				<div className='relative'>
					<p
						className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
  absolute'
					>
						Password
					</p>
					<input
						placeholder='Password'
						type='password'
						className='border placeholder-gray-400 focus:outline-none
  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
  border-gray-300 rounded-md'
					/>
				</div>
				<button
					onClick={() => handleClick('next')}
					className={`absolute -bottom-52 cursor-pointer  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
rounded-lg transition duration-200 hover:bg-indigo-600 ease w-full`}
				>
					Sign In
				</button>{' '}
			</div>
		</LoginContainer>
	);
};
