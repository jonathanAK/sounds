import { useState } from 'react'
import './App.css';
import {makeSound} from './services/midi';

function App() {
  const [count, setCount] = useState(0);
  const onClick = () =>{
      makeSound({});
      setCount(count+1);
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(onClick)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
