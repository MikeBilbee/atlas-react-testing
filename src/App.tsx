import React from 'react';
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

const App: React.FC = () => {
	return (
		<div className="h-full flex flex-col justify-between p-8 min-h-screen bg-light-background dark:bg-dark-background">
			<MusicPlayer />
			<Footer />
		</div>
	);
};

export default App;