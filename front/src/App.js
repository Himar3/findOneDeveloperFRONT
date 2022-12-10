import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import DevList from './components/DevList/DevList.jsx'
import ProjectList from './components/ProjectList/ProjectList.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <DevList />
      <ProjectList />
    </div>
  );
}

export default App;
