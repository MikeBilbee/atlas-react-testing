// SongTitle.tsx
import React from 'react';

interface songTitleProps {
	title: string,
	artist: string
}

const SongTitle: React.FC<songTitleProps> = ({ title, artist }) => {
	return (
		<div>
			<h1 className="text-3xl font-bold dark:text-gray-400 mb-2">{title}</h1>
			<h2 className="text-gray-600 dark:text-gray-500">{artist}</h2>
		</div>
	);
};

export default SongTitle;