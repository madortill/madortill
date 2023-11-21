import { useState, useRef, useEffect } from 'react'
import './menuBar.css'
import MenuDropDown from './menuDropDown'

const MenuBar = (props) => {

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
    const [currentItem, setCurrentItem] = useState("");
    const [isChosen, setChosenItem] = useState(false);


    function changeCurrentItem(event, currChosenObject) {
        if (event.currentTarget.innerText !== currentItem["item"]) {
            setCurrentItem(currChosenObject);
        } else {
            setCurrentItem("");
        }
    }

    useEffect(() => {
        for (let i = 0; i < navbarMenu.length; i++) {
            if (navbarMenu[i]["item"] === currentItem["item"]) {
                setChosenItem(true);
                break;
            } else {
                setChosenItem(false);
            }
        }
    }, [currentItem])

    return (
        <div ref={menuRef} className={props.onMenu ? 'openNav barContainer' : 'closeNav barContainer'}>
            <div className='mainNav'>
                {navbarMenu.map((title) => (
                    <div key={title.item}><div className="navItems" onClick={(event) => changeCurrentItem(event, title)} >{title.item}</div>
                    {(isChosen && currentItem["item"] === title.item) ? <MenuDropDown currentItem={currentItem} /> : <></>}</div>
                ))}
            </div>
        </div>
    )
}
export default MenuBar 