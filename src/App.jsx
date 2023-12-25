import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import MainPage from './components/mainPage'
import Lomdot from './components/lomdot'

function App() {
    const [deviceType, setDeviceType] = useState("desktop");
    const [currentShownPage, setCurrentPage] = useState();
    const [aboutUsPage, setAboutUs] = useState(false);

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

    function changePage (newPage) {
      setCurrentPage(newPage);
    }

    function makeScrollToAboutUs () {
      setAboutUs(true);
    }

  return (
    <div className='containerEverything'>
      <div className="NavStyle">
        <NavBar navbarMenu={navbarMenu} changePage={changePage} makeScrollToAboutUs={makeScrollToAboutUs} />
      </div>
      <div className='currentPage'>
        <MainPage navbarMenu={navbarMenu} deviceType={deviceType} changePage={changePage} aboutUsPage={aboutUsPage} />
        {currentShownPage === "לומדות" && <Lomdot />}
      </div>
    </div>
  )
}

export default App
