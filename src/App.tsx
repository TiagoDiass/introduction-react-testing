import './App.css';
import Counter from './components/Counter/Counter';
import Calculator from './components/Calculator/Calculator';
import { useState } from 'react';

function App() {
  const [currentComponent, setCurrentComponent] = useState('counter');

  return (
    <div className='App'>
      <h1>Tests introduction</h1>

      <p>Use these buttons below to change the current component</p>

      <div className='components'>
        <button onClick={() => setCurrentComponent('counter')}>Counter</button>
        <button onClick={() => setCurrentComponent('calculator')}>
          Calculator
        </button>
      </div>

      {currentComponent === 'counter' && <Counter />}
      {currentComponent === 'calculator' && <Calculator />}
    </div>
  );
}

export default App;
