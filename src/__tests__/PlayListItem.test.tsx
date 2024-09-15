//PlayListItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem component', () => {
	it('renders with song details', () => {
		const song = {
			title: 'Sample Song',
			artist: 'Test Artist',
			duration: '3:45',
		};
		const { container } = render(<PlayListItem {...song} />);
		expect(container).toMatchSnapshot();
	});
});