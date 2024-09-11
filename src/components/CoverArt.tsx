// CoverArt.tsx
import React from 'react';
import placeholderSvg from '../assets/placeholder.svg';

interface CoverArtProps {
    cover?: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ cover }) => {
    return (
        <div className="w-30 h-30 overflow-hidden rounded-lg shadow-md">
            <img
                src={cover || placeholderSvg}
                alt="Cover Art"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;