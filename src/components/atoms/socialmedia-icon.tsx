import React from 'react';
import { ISocialMediaIconPropTypes } from './types/socialmedia-icon';

const SocialMediaIcon: React.FC<ISocialMediaIconPropTypes> = ({
	href,
	label,
	Icon,
}) => (
	<a
		href={href}
		aria-label={label}
		className='p-2 bg-blue-900 rounded-full border border-white'
	>
		<Icon className='h-4 w-4' />
	</a>
);

export default SocialMediaIcon;
