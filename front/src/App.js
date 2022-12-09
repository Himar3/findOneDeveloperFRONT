import React from 'react'
import './App.css'
import CardDev from './components/CardDev/CardDev.jsx'
import CardProject from './components/CardProject/CardProject.jsx';
import Header from './components/Header/Header.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <CardDev/>
      <CardProject/>
    </div>
  );
}

export default App;
