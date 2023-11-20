import './navDropDown.css'

const NavDropDown = (props) => {
    const dropDownList = [];

    for (let i = 0; i < props.menu.length; i++) {
        dropDownList.push(<div key={props.menu[i]} className='menuItem'>{props.menu[i]}</div>)
    }

    return (
        <div>
            {dropDownList}
        </div>
    )
}

export default NavDropDown