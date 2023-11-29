import { useState } from 'react'
import NavBar from './components/navBar'
import './App.css'
import MainPage from './components/mainPage'

function App() {

  return (
    <div className='containerEverything'>
      <div className="NavStyle">
        <NavBar  />
      </div>
      <div className='currentShownPage'>
        <MainPage />
      </div>
    </div>
  )
}

export default App
