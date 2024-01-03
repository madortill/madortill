import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import './App.css'
import NavBar from './components/navBar'
import MainPage from './components/mainPage'
import Lomdot from './components/lomdot'
import Video from './components/video'
import Certificate from './components/certificate.jsx'
import Pictures from './components/pictures.jsx'
import Presentation from './components/presentation.jsx'


function App() {
    const [deviceType, setDeviceType] = useState("desktop");
    const [aboutUsPage, setAboutUs] = useState(false);

    const navbarMenu = [
      {
        "item": "עמוד הבית",
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

    // function changePage (newPage) {
    //   console.log(newPage);
    //   setCurrentPage(newPage);
    // }

    function makeScrollToAboutUs () {
      setAboutUs(true);
    }

  return (
    <BrowserRouter>
      <div className='containerEverything'>
        {/* <div className="NavStyle">
          <NavBar navbarMenu={navbarMenu} changePage={changePage} makeScrollToAboutUs={makeScrollToAboutUs} />
        </div> */}
        <div className='currentPage'>
          <Routes>
            <Route path="/" element={<NavBar navbarMenu={navbarMenu} makeScrollToAboutUs={makeScrollToAboutUs} />}>
              <Route path="main" element={<MainPage navbarMenu={navbarMenu} deviceType={deviceType} aboutUsPage={aboutUsPage} />} />
              <Route path="לומדות" element={<Lomdot />} />
              <Route path="סרטים" element={<Video />} />
              <Route path="תמונות" element={<Pictures />} />
              <Route path="מצגות" element={<Presentation />} />
            </Route>
          </Routes>
          {/* {currentShownPage === "main" && <MainPage navbarMenu={navbarMenu} deviceType={deviceType} changePage={changePage} aboutUsPage={aboutUsPage} />} */}
          {/* {currentShownPage === "לומדות" && <Lomdot />}
          {currentShownPage === "סרטים" && <Video />} 
          {currentShownPage === "תעודות" && <Certificate />}
          {currentShownPage === "תמונות" && <Pictures />}
          {currentShownPage === "מצגות" && <Presentation />} */}
        </div>
      </div>
    </BrowserRouter>
  )
}
// navigate("/lomdot");

export default App
