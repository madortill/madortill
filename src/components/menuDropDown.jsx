import './menuDropDown.css'

const MenuDropDown = (props) => {
    const dropDownList = [];

    for (let i = 0; i < props.currentItem["list"].length; i++) {
        dropDownList.push(<div key={props.currentItem["list"][i]} className='menuItem' onClick={choosingSubSubject}>{props.currentItem["list"][i]}</div>)
    }

    function choosingSubSubject (event) {
        props.changePage(event.currentTarget.innerText);
    }

    return (
        <div className='totalMenuItems'>
            {dropDownList}
        </div>
    )
}

export default MenuDropDown