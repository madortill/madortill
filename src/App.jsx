import { useState } from 'react'
import NavBar from './components/navBar'
import './App.css'

function App() {

  return (
    <div>
      <div className="NavStyle">
        <NavBar  />
      </div>
      <div className='currentShownPage'>

      </div>
    </div>
  )
}

export default App
