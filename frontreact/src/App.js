import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div className="App">
          <h1>
              Bases saines
          </h1>
          <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update/>} />
          </Routes>
      </div>
  );
}

export default App;
