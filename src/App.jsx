import { useState } from 'react'
import NavBar from './components/navBar'
import './App.css'
import AboutUs from './components/aboutUs'

function App() {

  return (
    <div>
      <div className="NavStyle">
        <NavBar  />
      </div>
      <div className='currentShownPage'>
        <AboutUs />
      </div>
    </div>
  )
}

export default App
