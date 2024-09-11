// PlayControls.tsx
import React, { useState } from 'react';
import { PauseIcon, PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

interface PlayControlsProps {
    onPlayPause: () => void;
    onRewind: () => void;
    onFastForward: () => void;
	audioRef: React.MutableRefObject<HTMLAudioElement | null>;
	onPlaybackRate: () => void;
	isShuffleOn: boolean;
	onShuffleToggle: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
	onPlayPause,
	onRewind,
	onFastForward,
	audioRef,
	isShuffleOn,
	onShuffleToggle
}) => {

	const [isPlaying, setIsPlaying] = useState(false); 
	const [playbackRate, setPlaybackRate] = useState(1);

const handlePlayPauseClick = () => {
		setIsPlaying(!isPlaying); 
		onPlayPause();
	};

const handlePlaybackRateClick = () => {
	setPlaybackRate((prevRate: number) => {
		if (audioRef.current) {
			const newRate = prevRate === 3 ? 1 : prevRate + 1;
			audioRef.current.playbackRate = newRate;
			return newRate;
		} 
		return prevRate;
	});
};

	const handleShuffle = () => {
		onShuffleToggle(); // Toggle the shuffle state in the parent
	};

	return (
		<div className="flex items-center justify-around">
			<button
				onClick={handlePlaybackRateClick}
				className="p-2 rounded-md dark:text-black bg-light-secondary dark:bg-dark-secondary border-gray-400 hover:border-black"
				aria-label="Playback Rate"
			>{playbackRate}x</button> 
			<button onClick={onRewind} className="p-2 rounded-md bg-light-secondary dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label="Rewind">
				<BackwardIcon className="h-5 w-5 text-gray-600 dark:text-black" /> 
			</button>
			<button onClick={handlePlayPauseClick} className="p-3 rounded-md bg-light-secondary dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label={isPlaying ? 'Pause' : 'Play'}>
				{isPlaying ? <PauseIcon className="h-6 w-6 text-gray-600 dark:text-black" /> : <PlayIcon className="h-6 w-6 text-black" />}
			</button>
			<button onClick={onFastForward} className="p-2 rounded-md bg-light-secondary dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black" aria-label="Fast Forward">
				<ForwardIcon className="h-5 w-5 text-gray-600 dark:text-black " /> 
			</button>
			<button onClick={handleShuffle} className={`p-2 rounded-md bg-light-secondary dark:bg-dark-secondary dark:text-gray-400 border-gray-400 hover:border-black ${isShuffleOn ? 'text-blue-500' : ''}`} aria-label="Shuffle"> 
				<ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-600 dark:text-black" /> 
			</button>
		</div>
	);
};

export default PlayControls;