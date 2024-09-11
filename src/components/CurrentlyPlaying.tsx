import React, { useRef, useState, useEffect } from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

interface Song {
	title: string;
	artist: string;
	cover?: string;
	duration: string;
}

interface CurrentlyPlayingProps {
	song: Song;
	playlist: Song[];
	onSongChange: (newSong: Song) => void;
	playbackRate: number;
	onPlaybackRateChange: (newRate: number) => void;
	isShuffleOn: boolean;
	onShuffleToggle: () => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
	song,
	playlist,
	onSongChange,
	playbackRate,
	onPlaybackRateChange,
	isShuffleOn,
	onShuffleToggle
}) => {

	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const handlePlaybackRateClick = () => {
		const newRate = playbackRate === 3 ? 1 : playbackRate + 1;
		onPlaybackRateChange(newRate); 
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.playbackRate = playbackRate;

			if (isPlaying) {
				audioRef.current.play().catch(error => {
					console.error("Error playing audio:", error);
				});
			}
		}
	}, [song, isPlaying, playbackRate]);

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
		}
	};

	const handleBack = () => {
		if (playlist.length > 0) {
			const currentSongIndex = playlist.findIndex(s => s.title === song.title);
			if (currentSongIndex > 0) {
				const prevSongIndex = currentSongIndex - 1;
				onSongChange(playlist[prevSongIndex]);
			}
		}
	};

	const handleSkip = () => {
		if (playlist.length > 0) {
			if (isShuffleOn) {
				const randomIndex = Math.floor(Math.random() * playlist.length);
				onSongChange(playlist[randomIndex]);
			} else {
				const currentSongIndex = playlist.findIndex(s => s.title === song.title);
				if (currentSongIndex < playlist.length - 1) {
					const nextSongIndex = currentSongIndex + 1;
					onSongChange(playlist[nextSongIndex]);
				}
			}
		}
	};

	return (
		<div className=" sm:h-200 md:h-[620px] lg:h-[620px] bg-light-primary dark:bg-dark-primary p-6 rounded-lg shadow-md border-gray-300 flex flex-col justify-between items-center"> 
			{song && <CoverArt cover={song.cover} />}

			<div className=" flex-grow mt-4 text-left w-10/12">
			{song && <SongTitle title={song.title} artist={song.artist} />}
			</div>
			<div className=" flex-grow w-full px-10">
				<PlayControls 
					onPlayPause={handlePlayPause}
					onRewind={handleBack} 
					onFastForward={handleSkip}
					isShuffleOn={isShuffleOn}
					onShuffleToggle={onShuffleToggle}
					audioRef={audioRef}
					onPlaybackRate={handlePlaybackRateClick} 
				/>
			</div>
			<div className=" flex-grow  mt-4 flex items-center">
				<VolumeControl value={50} onChange={() => {}} />
			</div>
			<audio
				ref={audioRef}
			/>
		</div>
	);
};

export default CurrentlyPlaying;