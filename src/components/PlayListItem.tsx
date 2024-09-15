// PlayListItem.tsx
import React from 'react';

interface PlayListItemProps {
	title: string;
	artist: string;
	duration: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration }) => {
	
	return (
		<div className="flex items-center justify-between py-1 px-5">
			<div>
				<h3 className="text-lg font-medium dark:text-gray-400">{title}</h3>
				<p className="dark:text-gray-500 text-sm">{artist}</p>
			</div>
			<p className="dark:text-gray-500 text-sm">{duration}</p>
		</div>
	);
};

export default PlayListItem;