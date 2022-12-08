import React from 'react'
import './App.css'
import CardDev from './components/CardDev/CardDev.jsx'
import CardProject from './components/CardProject/CardProject.jsx';


function App() {
  return (
    <div className="App">
      <CardDev/>
      <CardProject/>
    </div>
  );
}

export default App;
