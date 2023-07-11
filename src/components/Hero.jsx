import React from 'react';

const Hero = () => {
	return (
		<div className='flex items-center justify-center'>
			<img
				className='absolute top-0 left-0'
				src='/shape1.svg'
				alt='bg'
			/>{' '}
			<div className='flex justify-between gap-8'>
				<div className='flex justify-items-start'>
					<h1>Here Goes Title</h1>
				</div>
				<div>
					<h1>here goes Image</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
