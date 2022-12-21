import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { createContext } from 'react'
import { useState } from 'react';

export const searchContext = createContext({})

function App() {
  const [ searchTerm, setSearchTerm ] = useState('')

  return (
    <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </searchContext.Provider>
  );
}

export default App;
