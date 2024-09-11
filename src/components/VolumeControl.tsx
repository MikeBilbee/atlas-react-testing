// VolumeControl.tsx
import React, { useState } from 'react';
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

interface VolumeControlProps {
    value: number;
    onChange: (newVolume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = () => {
	const [volume, setVolume] = useState(50);

	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(parseInt(event.target.value, 10));
	};

	return (
		<div className="flex items-center space-x-2">
			{volume === 0 ? (
				<SpeakerXMarkIcon className="h-5 w-5 text-gray-300 dark:text-gray-800" />
			) : (
				<SpeakerWaveIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
			)}

		<div className={`relative min-w-64 sm:w-35 md:w-45 lg:w-96 h-2 bg-gray-200 dark:bg-gray-400 rounded-full`}>
			<div
				className={`absolute h-full bg-light-background dark:bg-dark-secondary rounded-full transition-all duration-300 ease-in-out`}
				style={{ width: `${volume}%` }}
			/>
				<input
					type="range"
					min="0"
					max="100"
					value={volume}
					onChange={handleVolumeChange}
					className={`
						absolute w-full h-full appearance-none bg-transparent focus:outline-none
						&::-webkit-slider-thumb {
							-webkit-appearance: none;
							appearance: none;
							width: 12px;
							height: 12px;
							background-color: #4b5563;
							border-radius: 50%;
							cursor: pointer;
						}
					`}
				/>
			</div>
		</div>
	);
};

export default VolumeControl;