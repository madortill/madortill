import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import MainPage from './components/mainPage'
import Lomdot from './components/lomdot'

function App() {
    const [deviceType, setDeviceType] = useState("desktop");
    const [currentShownPage, setCurrentPage] = useState();

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

    function handleChange (newPage) {
      console.log(newPage);
      // setCurrentPage(newPage);
    }

  return (
    <div className='containerEverything'>
      <div className="NavStyle">
        <NavBar navbarMenu={navbarMenu} handleChange={handleChange} />
      </div>
      <div className='currentPage'>
        <MainPage navbarMenu={navbarMenu} deviceType={deviceType} handleChange={handleChange} />
        {currentShownPage === "לומדות" && <Lomdot />}
      </div>
    </div>
  )
}

export default App
