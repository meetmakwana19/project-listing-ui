import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProjectList = () => {
	return (
		<>
			{/*---------------- Project List--------------- */}
			<Link
				to={`/projects/:id`}
				className='flex flex-col items-start gap-3 p-5 hover:bg-slate-100 cursor-pointer border-t w-full relative'
			>
				<div className='flex w-full gap-6 items-center relative'>
					<BsFillBookmarkPlusFill className='absolute w-7 h-7 top-2 border-spacing-4 right-3 z-30 hover:text-accent' />
					<img
						src='/SVG/os-projects-android_thumbnail_720.png'
						className='aspect-square w-40 h-40 object-cover rounded-lg'
						alt=''
					/>
					<div className='flex flex-col w-full'>
						{/*------------ title------------- */}
						<h1 className='text-xl font-medium text-slate-900'>Android</h1>

						{/*------------ timestamp ------------- */}
						<p className='text-sm text-slate-600'>Posted by Google</p>
						<div className='flex my-5'>
							<div className='flex flex-col w-1/2 items-start justify-start gap-3'>
								<div>
									<h3 className='listing-content-data'>30+ hrs/week</h3>
									<h4 className='listing-content-constant'>Hours Needed</h4>
								</div>
								<div>
									<h3 className='listing-content-data'>Entry Level</h3>
									<h4 className='listing-content-constant'>Experience Level</h4>
								</div>
							</div>
							<div className='flex flex-col w-1/2 items-start justify-start gap-3'>
								<div>
									<h3 className='listing-content-data'>30+ hrs/week</h3>
									<h4 className='listing-content-constant'>Duration</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*------------ description ------------- */}
				<p className='listing-description'>
					Hello I am a doctor managing a surgery center in CT and need someone
					to help us develop our EMR and softwares, SIS Surgical Information
					Sytems, SIS link, and bring our business to the next level. Need help
					with the softwares and other tools office IT help etc.
				</p>

				{/* -------------tech Stack---------------- */}
				<div className='flex'>
					<ul className='capitalize text-slate-500'>
						<li className='border  bg-cyan-100/50 shadow-sm p-2 text-sm px-2 py-1 rounded-xl'>
							mobile
						</li>
					</ul>
				</div>
			</Link>
		</>
	);
};

export default ProjectList;
