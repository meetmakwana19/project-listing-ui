import { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';
import { RiArrowRightSLine } from 'react-icons/ri';

const ProjectListings = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			const response = await fetch(
				'https://projekto-backend.onrender.com/projects',
				{ mode: 'cors' }
			);
			const fetchedProjects = await response.json();
			setProjects(fetchedProjects.data);
			console.log('fetch Projects------------', fetchedProjects.data);
			// console.log('fetch Projects------------', projects);
		};
		fetchProjects();
	}, []);

	const token = localStorage.getItem('authToken');
	const logOut = () => {
		console.log('noAuthToken');
		localStorage.removeItem('authToken');
		token = null;
	};

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

				{/* ----------------Show Only for Organizations------------ */}
				{token && (
					<div className='flex my-8 items-center justify-center gap-10 z-[1]'>
						<div className='flex justify-between  items-center cursor-pointer bg-accent hover:bg-accent/50 rounded-lg text-white font-semibold text-center'>
							<a
								href='/projects/create'
								className='flex p-3 md:p-4 items-center justify-center'
							>
								New Project <RiArrowRightSLine className='ml-2 text-md' />
							</a>
						</div>
					</div>
				)}
			</div>

			<div className='flex justify-center my-6 relative mx-3'>
				<div
					className='flex lg:w-3/5 flex-col justify-center w-full md:w-4/5 items-start
				 border z-10 border-slate-300  bg-white/50 rounded-2xl py-5'
				>
					<h1 className='text-2xl text-start font-medium text-slate-800 px-5'>
						Projects open for development
					</h1>
					<div className='flex mt-6 w-full justify-between border-b '>
						<div className='tabs'>
							<a className='tab tab-bordered tab-active '>Best Matches</a>
							<a className='tab'>Saved Jobs</a>
						</div>

						{/*--------sort button--------- */}
						<>
							<div class='flex items-center justify-end px-4'>
								<div class='relative inline-block text-left'>
									<div>
										<button
											type='button'
											class='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
											id='menu-button'
											aria-expanded='false'
											aria-haspopup='true'
											onClick={() => setIsOpen(!isOpen)}
										>
											Sort
											<svg
												class='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
												viewBox='0 0 20 20'
												fill='currentColor'
												aria-hidden='true'
											>
												<path
													fill-rule='evenodd'
													d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</button>
									</div>

									<div
										class={`absolute right-0 mt-2 w-40 origin-top-right rounded-md
										 bg-white shadow-2xl ring-1 z-50 ring-black ring-opacity-5 focus:outline-none
										 ${isOpen ? '' : 'hidden'}`}
										role='menu'
										aria-orientation='vertical'
										aria-labelledby='menu-button'
										tabindex='-1'
									>
										{' '}
										<div
											class='py-1'
											role='none'
										>
											<a
												href='#'
												class='font-medium text-gray-900 block px-4 py-2 text-sm'
												role='menuitem'
												tabindex='-1'
												id='menu-item-0'
											>
												Most Popular
											</a>
											<a
												href='#'
												class='text-gray-500 block px-4 py-2 text-sm'
												role='menuitem'
												tabindex='-1'
												id='menu-item-1'
											>
												Best Rating
											</a>
											<a
												href='#'
												class='text-gray-500 block px-4 py-2 text-sm'
												role='menuitem'
												tabindex='-1'
												id='menu-item-2'
											>
												Newest
											</a>
											<a
												href='#'
												class='text-gray-500 block px-4 py-2 text-sm'
												role='menuitem'
												tabindex='-1'
												id='menu-item-3'
											>
												Price: Low to High
											</a>
											<a
												href='#'
												class='text-gray-500 block px-4 py-2 text-sm'
												role='menuitem'
												tabindex='-1'
												id='menu-item-4'
											>
												Price: High to Low
											</a>
										</div>
									</div>
								</div>
							</div>
						</>
					</div>

					<p className='mx-5 my-2 text-base'>
						Browse projects that match your experience to a client's hiring
						preferences. Ordered by most relevant.
					</p>
					{projects.length > 0 ? (
						<ProjectList projects_prop={projects} />
					) : (
						<div className='flex w-full justify-center text-slate-500'>
							Loading.....
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectListings;
