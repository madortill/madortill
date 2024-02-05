import './navBar.css'
import MenuBar from "./menuBar"
import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Search from "../assets/search.svg"
import logoMador from '../assets/logoMador.svg'

const Navbar = (props) => {
    const [onMenu, setOnMenu] = useState(false);
    const [isMenuIcon, toggleMenuIcon] = useState(false);
    const [firstTime, setFirstTime] = useState(false);
    let navigate = useNavigate();

    function openMenu (toggle) {
        setFirstTime(true);

        if (toggle !== undefined) {
            setFirstTime(false);
            setOnMenu(toggle);
            toggleMenuIcon(toggle);
        } else {
            setOnMenu(!onMenu);
            toggleMenuIcon(!isMenuIcon);
        }
    }

    return (
        <>
            <div className='menuContainer' >
                <img src={Search} className="searchIcon" alt="search" />
                <img className='madortillName' src={logoMador} alt="logo" onClick={() => {navigate("/"); openMenu(false);}}/>
                <div className={isMenuIcon ? "hamburger is-active" : "hamburger"
            } id="hamburger-1" onClick={() => openMenu()}>
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

