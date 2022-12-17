import Counter from './Counter';
import { render, screen } from '@testing-library/react';

describe('Component: Counter', () => {
  it('should render correctly (heading and buttons)', () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
    expect(screen.getByTestId('half-button')).toBeInTheDocument();
    expect(screen.getByTestId('double-button')).toBeInTheDocument();
  });
});
