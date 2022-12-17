import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: Counter', () => {
  it('should render correctly (heading and buttons)', () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
    expect(screen.getByTestId('half-button')).toBeInTheDocument();
    expect(screen.getByTestId('double-button')).toBeInTheDocument();

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');
  });

  it('should increment the counter correctly', async () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');

    await userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 1');
  });

  it('should decrement the counter correctly', async () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');

    await userEvent.click(screen.getByTestId('decrement-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: -1');
  });

  it('should double the counter correctly', async () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');

    await userEvent.click(screen.getByTestId('increment-button'));
    await userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 2');

    await userEvent.click(screen.getByTestId('double-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 4');
  });

  it('should half the counter correctly', async () => {
    render(<Counter />);

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');

    await userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 1');

    await userEvent.click(screen.getByTestId('half-button'));

    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0.5');
  });
});
