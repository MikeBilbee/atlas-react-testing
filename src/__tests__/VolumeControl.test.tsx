import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl'; 

describe('VolumeControl component', () => {

  it('renders correctly with initial volume', () => {
    const { container } = render(<VolumeControl volume={50} onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('calls onChange prop when volume changes', () => {
    const onChangeMock = vi.fn();
    const { container } = render(<VolumeControl volume={30} onChange={onChangeMock} />);

    const slider = container.querySelector('input[type="range"]') as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '75' } });
    expect(onChangeMock).toHaveBeenCalledWith(75);
  });

  it('updates the progress bar width on volume change', () => {
    const { container } = render(<VolumeControl volume={30} onChange={() => {}} />);

    const slider = container.querySelector('input[type="range"]') as HTMLInputElement;
    const progressBar = container.querySelector('.bg-light-background') as HTMLElement; 

    fireEvent.change(slider, { target: { value: '75' } });
    expect(progressBar.style.width).toBe('75%');
  });
});