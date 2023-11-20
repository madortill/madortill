import { useState } from 'react'
import './navBar.css'
import Search from "../assets/search.svg"
import NavDropDown from './navDropDown'

const NavBar = () => {

    const navbarMenu = [
        {
            "item": "קצת עלינו",
            "list": []
        }, 
        {
            "item": "מאגר DIY",
            "list": ["תעודות הוקרה", "תעודות הצטיינות", "הזמנות", "ברכות יום הולדת"]
        },
        {
            "item": "גלריית תוצרים",
            "list": ["לומדות", "וידיאו", "פודקאסטים", "מצגות"]
        },
        {
            "item": "חומרי גלם",
            "list": ["סמלי יחידות", "אייקונים"]
        }
    ];

    const wholeNav = [];
    const [currentItem, setCurrentItem] = useState("");
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    for (let i = 0; i < navbarMenu.length; i++) {
        wholeNav.push(<div key={navbarMenu[i]["item"]}><div className="navItems" onClick={changeCurrentItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{navbarMenu[i]["item"]}</div>{isHovering && <NavDropDown menu={navbarMenu[i]["list"]} />}</div>)
    }

    function changeCurrentItem (event) {
        setCurrentItem(event.currentTarget.innerText);
    }

    return (
        <div className='barContainer'>
            <img src={Search} className="searchIcon" alt="search" />
            <div className='wholeNav'>
                {wholeNav}
            </div>
        </div>
    )
}

export default NavBar 