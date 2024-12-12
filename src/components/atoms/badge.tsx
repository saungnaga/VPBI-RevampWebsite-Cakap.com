// badge

import React from 'react';
import { BadgePropTypes } from './types/badge.types';

export const Badge: React.FC<BadgePropTypes> = ({
	children,
	onClick,
	bgcolor,
}) => {
	const bgcolors = {
		white: 'bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-30 text-black',
		green: 'bg-lime-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-30 text-black',
		blue: 'bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-30 text-white',
	};

	const style = `flex gap-2 text-xs font-semibold rounded-3xl ${bgcolors[bgcolor]}`;

	return (
		<div>
			<button className={style} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default Badge;
