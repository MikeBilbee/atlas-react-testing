// MusicPlayer.tsx
import { useState, useEffect } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import usePlaylistData from '../hooks/usePlaylistData';

interface Song {
    title: string;
    artist: string;
    duration: string;
	cover?: string;
}

const MusicPlayer: React.FC = () => {
    const { data: playlistData, loading } = usePlaylistData();
	const [currentSong, setCurrentSong] = useState<Song>(playlistData[0]);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isShuffleOn, setIsShuffleOn] = useState(false);

	useEffect(() => {
		if (playlistData.length > 0) {
			setCurrentSong(playlistData[0]);
		}
	}, [playlistData]);

	const handleSongChange = (newSong: Song) => {
		setCurrentSong(newSong); 
	};

	const handleSongSelect = (song: Song) => {
		setCurrentSong(song);
	};

	const handlePlaybackRateChange = (newRate: number) => {
		setPlaybackRate(newRate);
	};

	return (
		<div className="flex flex-col md:flex-row">
			{loading && <div>Loading...</div>}

			{!loading && currentSong && (
				<div className="md:w-1/2 p-4"> 
					<CurrentlyPlaying
						song={currentSong}
						playlist={playlistData} 
						onSongChange={handleSongChange}
						playbackRate={playbackRate}
						onPlaybackRateChange={handlePlaybackRateChange}
						isShuffleOn={isShuffleOn}
						onShuffleToggle={() => setIsShuffleOn(!isShuffleOn)}
					/>
			</div>
			)}
			{!loading && (
				<div className="md:w-1/2 p-4"> 
					<Playlist songs={playlistData}
						onSongSelect={handleSongSelect}
						currentSong={currentSong}
					/>
				</div>
			)}
		</div>
	);
};

export default MusicPlayer;
