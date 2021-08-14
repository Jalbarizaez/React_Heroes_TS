import React from 'react';
import './App.css';
import { HeroeGrid } from './components/HeroeGrid/HeroeGrid';
import { HomeScreen } from './screens/HomeScreen';
import Logo from './assets/logo/logo.svg'

function App() {
  return (
    <div className="App App-color" >
      <img 
          src = {Logo}
          style = {{
            width: 50,
            margin: 40
          }}
          alt = ""
      />
      <HeroeGrid />
    </div>
  );
}

export default App;
