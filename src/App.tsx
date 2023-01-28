import './App.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <a rel="noreferrer" href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a rel="noreferrer" href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Modern Vite App</h1>
      <h2>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        +{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
        </a>{' '}
        +{' '}
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          Vite
        </a>{' '}
        +
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          TailwindCSS
        </a>{' '}
        +
        <a href="https://vitest.dev/" target="_blank" rel="noreferrer">
          {' '}
          Vitest
        </a>{' '}
        +
        <a
          href="https://typicode.github.io/husky/#/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Husky
        </a>{' '}
        +
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          {' '}
          EsLint
        </a>{' '}
        +
        <a
          href="https://airbnb.io/javascript/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          AirBnB Config
        </a>{' '}
        +
        <a href="https://prettier.io/" target="_blank" rel="noreferrer">
          {' '}
          Prettier
        </a>
      </h2>
      <div className="card">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <a
        className="text-red-500"
        href="https://instagram.com/sherifzaherr"
        rel="noreferrer"
        target="_blank"
      >
        Sherif Zaherr
      </a>
    </div>
  );
}

export default App;
