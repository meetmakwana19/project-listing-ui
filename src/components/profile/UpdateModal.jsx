import { useState } from 'react';
import { LuEdit } from 'react-icons/lu';

const UpdateModal = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
		phone: '',
		city: '',
		technical_role: '',
		qualification: '',
		skills: '',
	});
	return (
		<>
			{/* Open the modal using ID.showModal() method */}
			<button
				className='btn'
				onClick={() => window.my_modal_2.showModal()}
			>
				<LuEdit className='absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10 ' />
			</button>
			<dialog
				id='my_modal_2'
				className='modal p-4 bg-transparent'
			>
				<form
					method='dialog'
					className='modal-box  bg-white rounded-2xl p-10'
				>
					<h1 className='flex items-center justify-center w-full text-2xl font-semibold border-b pb-4 text-slate-800'>
						Update Profile
					</h1>
					<div
						className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 h-[60vh] overflow-y-scroll scroll-smooth
					 z-10 scrollbar px-3'
					>
						<div className='flex flex-auto gap-5 w-full items-center justify-between'>
							<div className='relative w-full  pt-3'>
								<p
									className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
								>
									First Name
								</p>
								<input
									placeholder='John'
									type='text'
									value={formData.fname}
									onChange={(event) =>
										setFormData({ ...formData, fname: event.target.value })
									}
									className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
								/>
							</div>
							<div className='relative w-full'>
								<p
									className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
								>
									Last Name
								</p>
								<input
									placeholder='Doe'
									type='text'
									value={formData.lname}
									onChange={(event) =>
										setFormData({ ...formData, lname: event.target.value })
									}
									className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
								/>
							</div>
						</div>
						<div className='relative'>
							<p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>
								Email
							</p>
							<input
								placeholder='johndoe@example.com'
								type='text'
								value={formData.email}
								onChange={(event) =>
									setFormData({ ...formData, email: event.target.value })
								}
								className='border lowercase placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
							/>
						</div>
						<div className='relative'>
							<p
								className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
							>
								New Password
							</p>
							<input
								placeholder='Password'
								type='password'
								value={formData.password}
								onChange={(event) =>
									setFormData({ ...formData, password: event.target.value })
								}
								className='border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
							/>
						</div>
						<div className='relative'>
							<p
								className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
							>
								Re-enter Password
							</p>
							<input
								placeholder='Password'
								type='password'
								value={formData.password}
								onChange={(event) =>
									setFormData({ ...formData, password: event.target.value })
								}
								className='border placeholder-gray-400 focus:outline-none
                  focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
							/>
						</div>

						{/* ----------------Image Update-------------- */}
						{/* <div className='relative'>
							<p
								className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
									  absolute'
							>
								Update Photo
							</p>
							<label
								for='dropzone-file'
								className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:text-accent  hover:bg-accent/10 '
							>
								<div className='flex flex-col text-gray-500  hover:text-accent items-center justify-center pt-5 pb-6'>
									<svg
										className='w-8 h-8 mb-4 '
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 20 16'
									>
										<path
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
										/>
									</svg>
									<p className='mb-2 text-sm  '>
										<span className='font-semibold'>Click to upload</span> or
										drag and drop
									</p>
									<p className='text-xs  '>
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								<input
									id='dropzone-file'
									type='file'
									className='hidden'
								/>
							</label>
						</div> */}
						<button
							onClick={() => handleClick('next')}
							className='cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
				rounded-lg transition duration-200 hover:bg-indigo-600 ease w-full'
						>
							Update
						</button>
					</div>
				</form>
				<form method='dialog'>
					<button className='modalbackdrop'>close</button>
				</form>
			</dialog>
		</>
	);
};

export default UpdateModal;
