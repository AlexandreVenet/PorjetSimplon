import logo from './logo.svg';
import Delete from './Delete';
import './App.css';
import { useState } from 'react';

function App() {
  const [temp, setTemp] = useState(
    [
      "Wesh",
      "Wosh"
    ]
  )
  return (
    <div className="App">
      <div className='listeMessages'>
        {temp.map(item => <Delete msg={item}/>)}
      </div>
      <div className='envoie'>
        <form className='formEnvoie'>
          <input type='Text'></input>
          <button>
            W
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
