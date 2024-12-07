// dropdown
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IDropdownPropTypes } from './types/dropdown.types';

const Dropdown: React.FC<IDropdownPropTypes> = ({
	label,
	options,
	defaultValue,
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const [selectedOption, setSelectedOption] = useState<string | null>(
		defaultValue | null
	);

	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) onChange(option);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			console.log('Clicked element:', event.target);
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			)
				toggleDropdown();
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<div
				className='relative inline-block text-left w-64'
				ref={dropdownRef}
			>
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
