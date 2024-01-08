import './navBar.css'
import MenuBar from "./menuBar"
import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Search from "../assets/search.svg"
import logoMador from '../assets/logoMador.svg'
import MainPage from './mainPage'

const Navbar = (props) => {
    const [onMenu, setOnMenu] = useState(false);
    const [isActive, toggleActive] = useState(true);
    const [firstTime, setFirstTime] = useState(false);
    let navigate = useNavigate();

    function openMenu () {
        toggleActive(!isActive);
        setOnMenu(!onMenu);
        setFirstTime(true);
    }

    return (
        <>
            <div className='menuContainer' >
                <img src={Search} className="searchIcon" alt="search" />
                <img className='madortillName' src={logoMador} alt="logo" onClick={() => navigate("/")}/>
                <div className={isActive ? "hamburger" : "hamburger is-active"} id="hamburger-1" onClick={openMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
                {firstTime && <MenuBar onMenu={onMenu} navbarMenu={props.navbarMenu} openMenu={openMenu} makeScrollToAboutUs={props.makeScrollToAboutUs} />}
            <Outlet></Outlet>
        </>
    )
}

export default Navbar

