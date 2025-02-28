import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import ToDo from './Components/ToDo'
import ThemeContext from './Components/ThemeContest'
function App() {

  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: theme === 'light'? 'white': 'black',
      color: theme === 'light'? 'black': 'white',
    }}> 
 
    <button onClick={toggleTheme}></button>
    </div>
  )
}

export default App
