import { useState } from 'react'
import './pickingSubSubject.css'

const PickingSubSubject = (props) => {
    const [hovered, setHovered] = useState(false);

    
    const toggleHover = (event) => {
        
        if (event.currentTarget.classList.contains("shrink")) {
            event.currentTarget.classList.remove("shrink");
        }
        
        event.currentTarget.classList.add("grow");
        setHovered(!hovered);
    }
    
    const leaveHover = (event) => {
        event.currentTarget.classList.add("shrink");
    }
    
    const subSubjectList = props.navbarMenu.map((option) => 
        <div key={option.id} className='optionList' >
            {option.list.map((list) => 
                <div className="optionToChoose" key={list} onMouseEnter={toggleHover} onMouseLeave={leaveHover}>{list}</div>
            )}
        </div>
    )
    return (
        <>
            {subSubjectList}
        </>
    )
}

export default PickingSubSubject