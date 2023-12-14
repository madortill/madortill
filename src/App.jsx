import { useState } from 'react'
import NavBar from './components/navBar'
import './App.css'
import MainPage from './components/mainPage'

function App() {

    const navbarMenu = [
      {
          "item": "קצת עלינו",
          "list": [], 
          "id": 0
      },
      {
        "item": "גלריית תוצרים",
        "list": ["לומדות", "וידיאו", "פודקאסטים", "מצגות"], 
        "id": 1
      },
      {
          "item": "מאגר DIY",
          "list": ["תעודות", "סמלי יחידות", "אייקונים"], 
          "id": 2
      }
    ];

  return (
    <div className='containerEverything'>
      <div className="NavStyle">
        <NavBar navbarMenu={navbarMenu} />
      </div>
      <div className='currentShownPage'>
        <MainPage navbarMenu={navbarMenu} />
      </div>
    </div>
  )
}

export default App
