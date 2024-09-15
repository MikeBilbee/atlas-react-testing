//SongTitle.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

describe('SongTitle component', () => {
  it('renders with title and artist', () => {
    const { container } = render(<SongTitle title="Test Title" artist="Sample Artist" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with long title and artist', () => {
    const longTitle = 'This is a very long song title that might wrap to multiple lines';
    const longArtist = 'This is also a very long artist name that might wrap';
    const { container } = render(<SongTitle title={longTitle} artist={longArtist} />);
    expect(container).toMatchSnapshot();
  });
});