import { useEffect, useState, useRef } from 'react'
import './menuBar.css'
import MenuDropDown from './menuDropDown'

const NavBar = (props) => {

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

    const menuRef = useRef();
    const wholeNav = [];
    const [currentItem, setCurrentItem] = useState("");

    for (let i = 0; i < navbarMenu.length; i++) {
        wholeNav.push(<div key={navbarMenu[i]["item"]}><div className="navItems" onClick={changeCurrentItem} >{navbarMenu[i]["item"]}</div></div>)
    }

    function changeCurrentItem (event) {
        setCurrentItem(event.currentTarget.innerText);
    }

    return (
        <div ref={menuRef} className={props.onMenu ? 'openNav barContainer' : 'closeNav barContainer'}>
            <div className='mainNav'>
                {wholeNav}
            </div>
        </div>
    )
}

export default NavBar 