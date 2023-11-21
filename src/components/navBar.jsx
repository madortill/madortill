import './navbar.css'
import MenuBar from "./menuBar"
import { useState } from 'react'
import Search from "../assets/search.svg"
import MenuBarIcon from "../assets/menuBar.svg"

const Navbar = () => {
    const [onMenu, setOnMenu] = useState(false);

    function openMenu () {
        setOnMenu(!onMenu);
    }

    return (
        <>
            <div className='menuContainer'>
                <img src={Search} className="searchIcon" alt="search" />
                <div>MADOR TILL</div>
                <img src={MenuBarIcon} className='menuIcon' alt="menu" onClick={openMenu} />
            </div>
            {onMenu && <MenuBar />}
        </>
    )
}

export default Navbar