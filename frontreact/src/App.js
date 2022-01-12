import Send from './logo/Send.svg';
import Delete from './Delete';
import Read from './Read'
import './App.css';
import { useState } from 'react';

function App() {
  const [temp, setTemp] = useState(
    [
      "Wesh",
      "Wosh",
      "14 et demi",
      "D'accord",
      "Sus",
      "Among Us",
      "Tobikadashi",
      "Rathalos",
      "Zora Magdharos"
    ]
  )
  return (
    <div className="App">
      <div className='listeMessages'>
        {temp.map(item => <Read msg={item}/>)}
      </div>
      <div className='envoie'>
        <form className='formEnvoie'>
          <input type='Text' ></input>
          <img src={Send}></img>
        </form>
      </div>
    </div>
  );
}

//{temp.map(item => <Delete msg={item}/>)}

export default App;
