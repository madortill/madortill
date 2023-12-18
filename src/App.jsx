import { useState } from 'react'
import NavBar from './components/navBar'
import './App.css'
import MainPage from './components/mainPage'

function App() {

    const [deviceType, setDeviceType] = useState("desktop");

    const navbarMenu = [
      {
          "item": "קצת עלינו",
          "list": [], 
          "id": 0
      },
      {
        "item": "גלריית תוצרים",
        "list": ["לומדות", "תמונות", "סרטים", "מצגות"], 
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
        <MainPage navbarMenu={navbarMenu} deviceType={deviceType} />
      </div>
    </div>
  )
}

export default App
