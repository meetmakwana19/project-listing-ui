import { useState } from 'react';

export const FilterButton = ({ filters }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='flex items-center justify-end px-4'>
				<div className='relative inline-block text-left'>
					<button
						type='button'
						className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-accent'
						id='menu-button'
						aria-expanded='false'
						aria-haspopup='true'
						onClick={() => setIsOpen(!isOpen)}
					>
						Sort
						<svg
							className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					{isOpen && (
						<div
							className={`absolute right-0 mt-2 w-40 origin-top-right rounded-md
										 bg-white shadow-2xl ring-1 z-50 ring-black ring-opacity-5 focus:outline-none
										 `}
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='menu-button'
						>
							{' '}
							<div
								className='py-1'
								role='none'
							>
								{filters.map((filters, index) => {
									// Include index as the second argument
									return (
										<a
											onClick={() => setIsOpen(!isOpen)}
											key={index}
											href={filters.property}
											className='font-medium capitalize hover:bg-slate-100 text-gray-900 block px-4 py-2 text-sm'
										>
											{filters.label}
										</a>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
