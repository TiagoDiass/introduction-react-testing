import { useState } from 'react';
import CalculatorClass from '../../calculator/Calculator';
import './Calculator.css';

type Operations = 'sum' | 'subtraction' | 'multiplication' | 'division';

const OperationsOptions = [
  {
    label: 'Sum',
    value: 'sum'
  },
  {
    label: 'Subtraction',
    value: 'subtraction'
  },
  {
    label: 'Multiplication',
    value: 'multiplication'
  },
  {
    label: 'Division',
    value: 'division'
  }
];

export default function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [selectedOperation, setSelectedOperation] = useState<Operations>('sum');
  const [result, setResult] = useState<number | null>(null);

  const clearNumbers = () => {
    setNumber1('');
    setNumber2('');
  };

  const handleCalculate = () => {
    const parsedNumber1 = parseInt(number1);
    const parsedNumber2 = parseInt(number2);

    const operations = {
      sum: CalculatorClass.sum,
      subtraction: CalculatorClass.subtract,
      multiplication: CalculatorClass.multiply,
      division: CalculatorClass.divide
    };

    const operationResult = operations[selectedOperation](
      parsedNumber1,
      parsedNumber2
    );
    setResult(operationResult);
    clearNumbers();
  };

  return (
    <div className='calculator'>
      <input
        placeholder='Number 1'
        data-testid='number-1-input'
        type='number'
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <input
        placeholder='Number 2'
        data-testid='number-2-input'
        type='number'
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <select
        value={selectedOperation}
        onChange={(e) => setSelectedOperation(e.target.value as Operations)}
        data-testid='operation-select'
      >
        {OperationsOptions.map((option) => (
          <option
            value={option.value}
            key={option.value}
            data-testid={`select-option-${option.value}`}
          >
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={handleCalculate} data-testid='calculate-button'>
        Calculate
      </button>

      {result ? (
        <h2>
          Result: <span data-testid='result'>{result}</span>
        </h2>
      ) : (
        <h2 data-testid='no-results'>No results for now</h2>
      )}
    </div>
  );
}
