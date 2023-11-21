import './navbar.css'
import MenuBar from "./menuBar"
import { useState } from 'react'
import Search from "../assets/search.svg"

const Navbar = () => {
    const [onMenu, setOnMenu] = useState(false);
    const [isActive, toggleActive] = useState(true)

    function openMenu (event) {
        toggleActive(!isActive);
        setOnMenu(!onMenu);
    }

    return (
        <>
            <div className='menuContainer'>
                <img src={Search} className="searchIcon" alt="search" />
                <div>MADOR TILL</div>
                <div className={isActive ? "hamburger" : ["hamburger is-active"]} id="hamburger-1" onClick={openMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <MenuBar onMenu={onMenu} />
        </>
    )
}

export default Navbar