import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './menuBar.css'
import MenuDropDown from './menuDropDown'
import Arrow from '../assets/downArrow.svg'

const MenuBar = (props) => {
    const [currentItem, setCurrentItem] = useState("");
    const [isChosen, setChosenItem] = useState(false);
    let navigate = useNavigate();

    function changeCurrentItem(event, currChosenObject) {
        if (event.currentTarget.innerText !== currentItem["item"]) {
            if (currentItem["item"] !== undefined) {
                if (currentItem["list"].length !== 0) {
                    document.getElementById(`arrow${currentItem["id"]}`).classList.remove("turnArrow");
                }
            }
            setCurrentItem(currChosenObject);
        } else {
            if (currentItem["list"].length !== 0) {
                document.getElementById(`arrow${currentItem["id"]}`).classList.remove("turnArrow");
                document.getElementById(`arrow${currentItem["id"]}`).classList.add('turnDownArrow');
            }
            setCurrentItem("");
        }
    }

    useEffect(() => {
        for (let i = 0; i < props.navbarMenu.length; i++) {

            if (props.navbarMenu[i]["item"] === currentItem["item"]) {
                setChosenItem(true);
                if (currentItem["item"] === "עמוד הבית") {
                    props.openMenu();
                    navigate(`/main`);
                }
                if (props.navbarMenu[i]["list"].length !== 0) {
                    document.getElementById(`arrow${currentItem["id"]}`).classList.add("turnArrow");
                    document.getElementById(`arrow${currentItem["id"]}`).classList.remove('turnDownArrow');
                }
                break;
            } else {
                setChosenItem(false);
            }
        }
    }, [currentItem])

    return (
        <div className={props.onMenu ? 'openNav barContainer' : 'closeNav barContainer'}>
            <div className='mainNav'>
                {props.navbarMenu.map((title) => (
                    <div key={title.item}>
                        <div className='itemContainer' onClick={(event) => changeCurrentItem(event, title)}>
                            <div className="navItems">{title.item}</div>
                            {title.list.length !== 0 && <img src={Arrow} alt="arrow" className='arrow' id={`arrow${title.id}`} />}
                        </div>
                        {(isChosen && currentItem["item"] === title.item) ? <MenuDropDown currentItem={currentItem} changePage={props.changePage} /> : <></>}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MenuBar 