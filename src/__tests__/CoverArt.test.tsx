//CoverArt.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt component', () => {
  it('renders with provided imageUrl', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const { container } = render(<CoverArt cover={imageUrl} />);
    expect(container).toMatchSnapshot();
  });

  it('renders with placeholder image when imageUrl is not provided', () => {
    const { container } = render(<CoverArt />);
    expect(container).toMatchSnapshot();
  });
});