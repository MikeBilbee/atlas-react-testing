//usePlaylistData.tsx
import { useState, useEffect } from 'react';

interface Song {
	id: number;
	title: string;
	artist: string;
	genre: string;
	cover: string;
	duration: string; 
}

const usePlaylistData = () => {
	const [data, setData] = useState<Song[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');

				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, loading };
};

export default usePlaylistData;