import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
// import DevList from './components/DevList/DevList.jsx'
// import ProjectList from './components/ProjectList/ProjectList.jsx'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Signup />
      {/* <DevList />
      <ProjectList /> */}
    </div>
  );
}

export default App;
