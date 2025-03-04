import React from 'react'
import CrudApp from './Components/CrudApp'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Components/Buttons';
import './index.css'
const App = () => {
  return (
    <div>
      <CrudApp/>
      <Buttons/>
      <h1 className="bg-amber-600">
    Hello world!
  </h1>
    </div>
  )
}

export default App
