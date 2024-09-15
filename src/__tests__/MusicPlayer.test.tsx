// MusicPlayer.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';
import '@testing-library/jest-dom'; 

describe('MusicPlayer component', () => {

	it('renders loading state initially', () => {
		render(<MusicPlayer />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('renders CurrentlyPlaying and Playlist after data is fetched', async () => {
		render(<MusicPlayer />);

		await waitFor(() => {
			expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

			const currentlyPlaying = screen.getByTestId('currently-playing');

			expect(within(currentlyPlaying).getByText('Painted in Blue')).toBeInTheDocument(); 

			expect(screen.getByText('Playlist')).toBeInTheDocument();
		});
	});

	it('highlights the currently playing song', async () => {
		render(<MusicPlayer />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

		const firstSongItem = screen.getAllByTestId('playlist-item')[0]; 

		expect(firstSongItem).toHaveClass('rounded-md bg-gray-300 dark:bg-gray-700'); 
	});

	it('changes the current song when a playlist item is clicked', async () => {
		render(<MusicPlayer />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

		// Find the CurrentlyPlaying component
		const currentlyPlaying = await screen.findByTestId('currently-playing');

		const secondSongItem = screen.getAllByTestId('playlist-item')[1];
		fireEvent.click(secondSongItem);

		// Wait for the current song to update within CurrentlyPlaying
		await waitFor(() => expect(within(currentlyPlaying).getByText('Tidal Drift')).toBeInTheDocument()); 
	});

	it('renders the music player with fetched data', async () => {
		render(<MusicPlayer />);

		// Wait for the loading state to disappear
		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

		// Assert that the CurrentlyPlaying and Playlist components are rendered
		expect(screen.getByTestId('currently-playing')).toBeInTheDocument();
		expect(screen.getByTestId('playlist')).toBeInTheDocument();
	});
});