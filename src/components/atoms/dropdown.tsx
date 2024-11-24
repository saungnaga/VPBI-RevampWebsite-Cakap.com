// dropdown

import React from 'react';
import { useDropdownStore } from '@/store/dropdownstore';
import { IDropdownPropTypes } from './types/dropdown.types';

const Dropdown: React.FC<IDropdownPropTypes> = ({ label, options, onChange }) => {
	const { isOpen, selectedOption, toggleDropdown, selectOption } =
		useDropdownStore();

	const handleSelect = (option: string) => {
		selectOption(option);
		if (onChange) onChange(option);
	};
	return (
		<>
			<div className='relative inline-block text-left w-64'>
				<label className='text-md text-black mb-1'>{label}</label>
				<div>
					<button
						type='button'
						className='inline-flex justify-between items-center w-full rounded-full border border-black bg-white px-4 py-2 text-med font-medium text-black shadow-sm hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700'
						onClick={toggleDropdown}
					>
						{selectedOption || label}
						<svg
							className={`ml-2 h-4 w-4 transform transition-transform ${
								isOpen ? 'rotate-180' : 'rotate-0'
							}`}
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M19 9l-7 7-7-7'
							/>
						</svg>
					</button>
					{isOpen && (
						<div className='absolute mt-2 w-full rounded-xl bg-white shadow-lg z-10 overflow-hidden'>
							<ul className='py-2 text-md text-black'>
								{options.map((option, index) => (
									<li
										key={index}
										className='cursor-pointer px-4 py-2 hover:bg-blue-700 hover:text-white'
										onClick={() => handleSelect(option)}
									>
										{option}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Dropdown;