import Send from './logo/Send.svg';
import Read from './Read'
import './App.css';
import { useState } from 'react';
import Delete from './Delete';

/*[
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

{temp.map((content, index) => (<Read key={index} msg={content}/>))}

  const defaultListe = [
    {content: "Wesh"} 
  ]
  const [temp, setTemp] = useState(defaultListe)
  
  const rajoutListe = e => {
    setTemp(temp.slice(temp.indexOf(e.target.content, 1)))

  <input type='Text' onChange={rajoutListe}></input>
  }
*/

function App() {

  const defaultListe = [
    {content: "Wesh"},
    {content: "Wesh"} 
  ]

  const [temp, setTemp] = useState(defaultListe)

  const rajoutListe = e => {
    setTemp(temp.slice(temp.indexOf(e.target.content, 1)))
  }

  // const [temp, setTemp] = useState(
  //   [
  //     "Wesh",
  //     "Wosh",
  //     "14 et demi",
  //     "D'accord",
  //     "Sus",
  //     "Among Us",
  //     "Tobikadashi",
  //     "Rathalos",
  //     "Zora Magdharos"
  //   ]
  // )

  return (
    <div className="App">
      <div className='listeMessages'>
        {/* {temp.map((item, index) => <Read key={index} msg={item}/>)} */}
        {temp.map((item, index) => {return ( <Read key={index} msg={item.content}/>)}) }
        

      </div>
      <div className='envoie'>
        <form className='formEnvoie'>
          <input type='Text'onChange={rajoutListe} ></input>
          {/* onChange={rajoutListe} */}
          <img src={Send}></img>
        </form>
      </div>
    </div>
  );
}

//{temp.map(item => <Delete msg={item}/>)}

export default App;
