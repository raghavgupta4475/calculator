import React, { useState } from 'react';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      if (expression === '') {
        setResult('Error');
        return;
      }
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div>
      <input type="text" value={expression} readOnly />
      <br />
      <div>{result}</div>
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
