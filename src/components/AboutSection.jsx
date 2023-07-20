import { AboutCard } from './AboutCard';
import { TiHeartFullOutline } from 'react-icons/ti';
import Image from '/developers/Haider_Patanwala.jpg';

export const AboutSection = () => {
	return (
		<section className="flex flex-col items-center justify-center  bg-[url('/bgsvg.svg')]  min-h-[50vh] w-full">
			<div className=' flex flex-col items-center filter w-full  py-24 h-full bg-white/70'>
				<h1 className='text-5xl blue-gradient font-semibold drop-shadow-lg '>
					IdeaBox
				</h1>
				<p className='flex items-center text-lg text-slate-600 font-medium'>
					Built with{' '}
					<span className='px-2'>
						{' '}
						<TiHeartFullOutline className='text-red-700 ' />
					</span>{' '}
					by makers
				</p>
				<p></p>
				<div className='flex flex-col md:flex-row z-49 p-6 gap-10 justify-between items-center w-[80%]'>
					<AboutCard
						image={Image}
						name='haider patanwala'
						github='haider-patanwala'
						linkedin='haiderpatan'
						email='haiderpatanwala@gmail.com'
						portfolio='https://haider-patanwala.github.io/'
					/>
					<AboutCard
						image='http://res.cloudinary.com/dulptytgu/image/upload/v1689539554/qcyvdqkfcoll6d2uqhyc.jpg'
						name='meet makwana'
						github='meetmakwana19'
						linkedin='#'
						email='#'
						portfolio='#'
					/>
					<AboutCard
						image='http://res.cloudinary.com/dulptytgu/image/upload/v1689539837/veqzm3jod0tluyoennjy.jpg'
						name='riyad chaudhary'
						github='Riyadcy'
						linkedin='#'
						email='#'
						portfolio='#'
					/>
				</div>
			</div>
		</section>
	);
};
