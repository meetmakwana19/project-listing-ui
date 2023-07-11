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
				<ProjectList />
			</div>
		</div>
	);
};

export default ProjectListings;
