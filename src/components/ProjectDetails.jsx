import { Link } from 'react-router-dom';
import { BiSolidMap } from 'react-icons/bi';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { AiFillQuestionCircle } from 'react-icons/ai';

const ProjectDetails = () => {
	return (
		<>
			<div className='flex justify-center relative mx-3'>
				<div
					className='flex lg:w-3/5 flex-col justify-center 
				w-full md:w-4/5 items-start border z-10
				 border-slate-300  bg-white/50 rounded-2xl py-6 '
				>
					<div className='items-center relative flex flex-col md:flex-row'>
						<img
							src='/SVG/os-projects-android_thumbnail_720.png'
							className='aspect-video ml-6 mb-2 md:aspect-square 
							w-ful  md:h-44 max md:w-44 object-cover rounded-lg'
							alt=''
						/>
						{/* Heading */}
						<div>
							<h1 className='text-2xl px-6 text-start font-medium text-slate-800 mb-6 '>
								Projects open for development
							</h1>
							{/* Domain */}
							<Link className='text-accent px-6 my-2 text-base font-medium underline'>
								Posted by Google
							</Link>
							{/* Timestamp */}
							<p className='text-sm px-6 text-slate-600'>Posted on 20/06/23</p>
							<div className='flex px-6 flex-col my-5 gap-2'>
								{/* City */}
								<p className='text-base flex items-center gap-2 text-slate-800'>
									<BiSolidMap className='text-accent' /> Worldwide
								</p>
								{/* Proposal Count */}
								<p className='text-base  text-slate-800'>
									Send a proposal for: total proposals{' '}
									<span className='text-accent animate-pulse'>100</span>
								</p>
							</div>
						</div>
					</div>

					<div className='flex w-full border-t py-3'>
						{/* description */}
						<h1 className='text-base px-6 text-start font-normal text-slate-800'>
							I need someone how can design my website. My website is pretty
							straightforward.
						</h1>
					</div>
					{/* Pricing */}
					<div className='flex justify-start gap-8 w-full border-t pt-3 pb-6'>
						<div className='flex text-base px-6 text-start font-normal gap-3 items-start'>
							<FaCircleDollarToSlot className='text-accent mt-2' />
							<p className='text-base font-medium'>
								Rs. 100.00 <br />{' '}
								<span className='text-sm font-light text-slate-600'>
									Fixed-price
								</span>
							</p>
						</div>
						{/* Experience Level */}
						<div className='flex text-base px-6 text-start font-normal gap-3 items-start'>
							<p className='text-base font-medium'>
								Entry Level <br />{' '}
								<span className='text-sm font-light text-slate-600'>
									Experience Level
								</span>
							</p>
						</div>
					</div>
					<div className='flex w-full border-t py-3'>
						{/* Contract type */}
						<p className='text-base px-6 text-start font-normal text-slate-800'>
							<span className='font-medium'>Project Type:</span> One-time
							project
						</p>
					</div>
					<div className='flex flex-col w-full border-t py-3 px-6 gap-4'>
						{/* TechStack */}
						<p className='text-base mb-3 text-start font-medium text-slate-800'>
							Skill and Expertise
						</p>
						<div className='flex'>
							<ul className='capitalize text-slate-600 underline'>
								<li
									className='border border-slate-300 px-2 
								py-1 bg-accent/10 text-sm rounded-2xl'
								>
									mobile
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col w-full border-t py-3 px-6 gap-4'>
						<p className='flex items-center text-lg my-3 text-start font-medium text-slate-800'>
							Upgrade your membership to see bid range
							{/* Tooltip Style ----! pending */}
							<div
								className='tooltip'
								data-tip='Hello'
							>
								<AiFillQuestionCircle className='text-base text-accent ml-2' />
							</div>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetails;
