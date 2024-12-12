import React from 'react';
import { InputPropTypes } from './types/input.types';

export const Input: React.FC<InputPropTypes> = ({
	id,
	value,
	onChange,
	placeholder,
	size = 'small',
	onKeyDown,
}) => {
	const baseClasses = 'bg-white rounded-full text-gray-700 outline-none';

	const sizes = {
		small: 'py-2 px-4 h-8 text-xs',
		large: 'py-3 px-4 h-10 text-l',
	};

	const classes = `${baseClasses} ${sizes[size]} `;

	return (
		<input
			className={classes}
			id={id}
			name={id}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
		/>
	);
};
