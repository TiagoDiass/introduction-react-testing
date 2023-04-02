import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

describe('Component: Calculator', () => {
  it('should render correctly', () => {
    render(<Calculator />);

    expect(screen.getByTestId('number-1-input')).toBeInTheDocument();
    expect(screen.getByTestId('number-2-input')).toBeInTheDocument();
    expect(screen.getByTestId('operation-select')).toBeInTheDocument();
    expect(screen.getByTestId('operation-select')).toBeInTheDocument();
    expect(screen.getByTestId('calculate-button')).toBeInTheDocument();
    expect(screen.getByTestId('no-results')).toBeInTheDocument();
  });

  it('should calculate correctly', async () => {
    render(<Calculator />);

    await userEvent.type(screen.getByTestId('number-1-input'), '5');
    await userEvent.type(screen.getByTestId('number-2-input'), '10');
    await userEvent.selectOptions(
      screen.getByTestId('operation-select'),
      'Multiplication'
    );
    await userEvent.click(screen.getByTestId('calculate-button'));

    expect(screen.getByTestId('result')).toHaveTextContent('50');
    expect(screen.queryByTestId('no-results')).not.toBeInTheDocument();
    expect(screen.getByTestId('number-1-input')).toHaveValue(null);
    expect(screen.getByTestId('number-2-input')).toHaveValue(null);
  });
});
