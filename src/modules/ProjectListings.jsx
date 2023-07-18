import ProjectList from '../components/ProjectList';

const ProjectListings = () => {
	return (
		<div className='flex flex-col justify-center w-full'>
			{/*------------- Background Gradient ------------ */}
			<div className='gradient z-0'></div>

			{/*------------- Headings ------------ */}

			<div className='gap-0 z-[1] mt-5'>
				<h1
					className=' text-gray-900 text-center text-3xl md:text-4xl
				 font-semibold'
				>
					Find your dream projects
				</h1>
				<h1
					className=' blue-gradient text-center text-3xl md:text-4xl
				 font-semibold'
				>
					Complete Trust & Freedom
				</h1>
			</div>

			<div className='flex justify-center my-6 relative mx-3'>
				<div
					className='flex lg:w-3/5 flex-col justify-center w-full md:w-4/5 items-start
				 border z-10 border-slate-300  bg-white/50 rounded-2xl py-5'
				>
					<h1 className='text-2xl text-start font-medium text-slate-800 px-5'>
						Projects open for development
					</h1>
					<div className='flex mt-6 w-full border-b '>
						<div className='tabs'>
							<a className='tab tab-bordered tab-active '>Best Matches</a>
							<a className='tab'>Saved Jobs</a>
						</div>
					</div>

					<p className='mx-5 my-2 text-base'>
						Browse projects that match your experience to a client's hiring
						preferences. Ordered by most relevant.
					</p>
					<ProjectList />
				</div>
			</div>
		</div>
	);
};

export default ProjectListings;
