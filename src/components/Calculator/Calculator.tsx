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

    switch (selectedOperation) {
      case 'sum': {
        setResult(CalculatorClass.sum(parsedNumber1, parsedNumber2));
        clearNumbers();
        return;
      }
      case 'subtraction': {
        setResult(CalculatorClass.subtract(parsedNumber1, parsedNumber2));
        clearNumbers();
        return;
      }
      case 'multiplication': {
        setResult(CalculatorClass.multiply(parsedNumber1, parsedNumber2));
        clearNumbers();
        return;
      }
      case 'division': {
        setResult(CalculatorClass.divide(parsedNumber1, parsedNumber2));
        clearNumbers();
        return;
      }
    }
  };

  return (
    <div className='calculator'>
      <input
        placeholder='Number 1'
        type='number'
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <input
        placeholder='Number 2'
        type='number'
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <select
        value={selectedOperation}
        onChange={(e) => setSelectedOperation(e.target.value as Operations)}
      >
        {OperationsOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={handleCalculate}>Calculate</button>

      {result ? (
        <h2>
          Result: <span>{result}</span>
        </h2>
      ) : (
        <h2>No result for now</h2>
      )}
    </div>
  );
}
