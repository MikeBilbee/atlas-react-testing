// Playlist.tsx
import React from 'react';
import PlayListItem from './PlayListItem';

interface Song {
    title: string;
    artist: string;
    duration: string;
	cover?: string;
}

interface PlaylistProps {
    songs: Song[];
    onSongSelect: (song: Song) => void;
	currentSong: Song;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, onSongSelect, currentSong }) => {
	return (
		<div className="space-y-0">
			<h2 className="mb-4 text-[1.45rem] font-bold dark:text-gray-400">Playlist</h2>
			{songs.map((song) => (
				<div 
					key={song.title} 
					onClick={() => onSongSelect(song)} 
					className={ `cursor-pointer ${song.title === currentSong?.title ? ' rounded-md bg-gray-300 dark:bg-gray-700' : ''}`}
				>
					<PlayListItem
						title={song.title}
						artist={song.artist}
						length={song.duration} 
					/>
				</div>
			))}
		</div>
	);
};

export default Playlist;