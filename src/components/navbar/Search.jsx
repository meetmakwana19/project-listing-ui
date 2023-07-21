import React from 'react';

const Search = ({searchInput, setSearchInput}) => {
	const onSearch = (event) => {
		event.preventDefault();
		setSearchInput({...searchInput, searchString : event.target.value})
	}
	return (
		<div className='flex gap-0 items-center w-full rounded-xl p-0 h-10 justify-center'>
			<input
				type='text'
				placeholder='Type here'
				value={searchInput.searchString}
				onChange={(e) => onSearch(e)}
				className='px-3 h-full outline-1 border w-4/5 rounded-l-xl border-slate-300 outline-slate-300/50 '
			/>
			{/* <button className='flex items-center justify-center bg-accent px-3 h-full w-1/5 rounded-r-xl text-white font-medium' onClick={searchClick}>
				Search
			</button> */}
		</div>
	);
};

export default Search;
