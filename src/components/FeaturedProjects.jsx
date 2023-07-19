import { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const FeaturedProjects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		const fetchProjects = async () => {
			const response = await fetch(
				'https://projekto-backend.onrender.com/projects?featured=true',
				{ mode: 'cors' }
			);
			const fetchedProjects = await response.json();
			setProjects(fetchedProjects.data);
			console.log('fetch Projects------------', fetchedProjects.data);
			// console.log('fetch Projects------------', projects);
		};
		fetchProjects();	
	}, [])
	
	return (
		<div className='flex flex-col max-w-7xl'>
			<div className='flex flex-col'>
				<h3 className='text-purple-300 font-semibold uppercase text-sm'>
					Featured projects
				</h3>
				<h2 className='text-3xl font-semibold'>
					Projects open for development join them and start contributing today.
				</h2>
			</div>

			{/*------------- Features Card ------------ */}
			<div className='flex flex-col md:flex-row my-8 gap-5'>
				<div className='flex md:w-1/3 flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					{/*------------- Project thumbnail ------------ */}
					<img
						src='/SVG/os-projects-android_thumbnail_720.png'
						className='object-cover rounded  aspect-video'
					/>

					<div className='gap=0'>
						{/*------------- Project title ------------ */}
						<h2 className='font-semibold text-xl '>Android</h2>

						{/*------------- Project organization ------------ */}
						<h2 className='font-light text-xl text-slate-200 '>Google</h2>
					</div>
					<div className='flex'>
						{/*------------- Project tech stack ------------ */}

						<ul className='capitalize text-slate-400'>
							<li className='border border-slate-600 p-2 text-sm rounded-2xl'>
								mobile
							</li>
						</ul>
					</div>

					{/*------------- Project description ------------ */}
					<p className='opacity-75 '>
						Android is an operating system and software stack created for an
						array of devices with different form factors, including phones,
						tablets, wearables, TVs, automobiles, and connected devices. The
						primary purposes of Android are to create an open platform available
						for carriers, OEMs, and developers to make their ideas a reality and
						to provide a successful, real-world product that improves the mobile
						experience for users.
					</p>
					<div className='flex'>
						{/*------------- Project link button ------------ */}
						<a
							href='/about'
							className='flex items-center p-3 mt-7 text-sm rounded-lg font-semibold bg-accent/70 hover:bg-accent/50'
						>
							About IdeaBox <RiArrowRightSLine className='ml-2 text-md' />
						</a>
					</div>
				</div>
				<div className='flex flex-col md:w-1/3 gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					<img src='/SVG/os-projects-kub_thumbnail_720.png' />
					<h2 className='font-semibold text-xl'>Kubernetes</h2>
					<p className='opacity-75'>
						Kubernetes is a cluster management system for managing containerized
						applications across multiple hosts, providing mechanisms for
						deployment, maintenance, and scaling of applications. It groups
						containers that make up an application into logical units for easy
						management and discovery.
					</p>
				</div>
				<div className='flex  md:w-1/3 flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					<img src='/SVG/os-projects-flutter_thumbnail.png' />
					<h2 className='font-semibold text-xl'>Flutter</h2>
					<p className='opacity-75'>
						Flutter is a mobile app SDK for building high-performance,
						high-fidelity apps for iOS and Android, from a single codebase. The
						goal is to deliver apps that feel natura
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProjects;
