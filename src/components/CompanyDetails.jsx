
import { BiSolidMap } from 'react-icons/bi';
import { LuEdit } from 'react-icons/lu';




const CompanyDetails = ({ org_data }) => {
	console.log("got orgData ---------", org_data);
	return (
		<>
			<div className='flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3'>
				<div
					className='flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center 
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10'
				>
					{/* ------------------Company Banner */}
					<div className='flex justify-start w-full mt-6 items-start place-content-start gap-[5%] border-b border-slate-300 px-5 py-7 relative'>
						<div className='flex items-center relative justify-center h-24 p-0 m-0'>
							<img
								src={org_data.banner_img}
								className='inline-block object-cover aspect-square h-full p-0 shadow shadow-accent rounded-full'
							/>
						</div>
						<LuEdit className='absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10' />
						<div className='flex flex-col justify-between items-start gap-3'>
							{/* --------Company Name------------------- */}
							<h1 className='text-3xl font-medium text-slate-900'>
								{org_data.name}
							</h1>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								<BiSolidMap />
								{/*------------------------ Company Location-------------------------- */}
								<p>India</p>
							</div>
						</div>
					</div>
					<div className='flex justify-start w-full items-start place-content-start'>
						{/* ----------Col-1----------------*/}
						<div className='flex flex-col gap-6 px-5 py-7  mr-2  w-1/3'>
							<div className='flex flex-col gap-2  '>
								<h1 className='text-lg text-slate-900 font-medium'>
									Industry
								</h1>
								<p className='description'>{org_data.domain}</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Founded in
								</h1>
								<p className='description'>1968</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Company Website
								</h1>
								<p className='description'>{org_data.website}</p>
							</div>
						</div>
						{/* ----------Col-2----------------*/}
						<div className='flex flex-col border-l pl-2 border-slate-300 gap-6 w-2/3 pb-10'>
							<div className='flex flex-col gap-2 px-5 py-7'>
								{/* ---------Company Name------------ */}
								<h1 className='text-2xl font-semibold mb-3'>
									About {org_data.name}
								</h1>
								<p className='description'>
									{org_data.about}
								</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</>
	);
};

 export default CompanyDetails;
