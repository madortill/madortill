import './menuDropDown.css'
import { useNavigate } from 'react-router-dom'

const MenuDropDown = (props) => {
    const dropDownList = [];
    let navigate = useNavigate();

    for (let i = 0; i < props.currentItem["list"].length; i++) {
        dropDownList.push(<div key={props.currentItem["list"][i]} className='menuItem' onClick={choosingSubSubject}>{props.currentItem["list"][i]}</div>)
    }

    function choosingSubSubject (event) {
        navigate(`${event.currentTarget.innerText}`);
    }

    return (
        <div className='totalMenuItems'>
            {dropDownList}
        </div>
    )
}

export default MenuDropDown