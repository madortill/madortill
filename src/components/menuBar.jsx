import { useState } from 'react'
import './menuBar.css'
import MenuDropDown from './menuDropDown'

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
        wholeNav.push(<div key={navbarMenu[i]["item"]}><div className="navItems" onClick={changeCurrentItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{navbarMenu[i]["item"]}</div></div>)
    }

    function changeCurrentItem (event) {
        setCurrentItem(event.currentTarget.innerText);
    }

    return (
        <div className='barContainer'>
            <div className='mainNav'>
                {wholeNav}
            </div>
            {/* {isHovering && <MenuDropDown menu={navbarMenu[1]["list"]} />} */}
        </div>
    )
}

export default NavBar 