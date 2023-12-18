import { useState } from 'react'
import './pickingSubSubject.css'

const PickingSubSubject = (props) => {
    const [hovered, setHovered] = useState(false);
    const subSubjectGallery = props.navbarMenu[1];
    
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
    
    const subSubjectList = subSubjectGallery.list.map((option) => 
        <div className="optionToChoose" key={option} onMouseEnter={toggleHover} onMouseLeave={leaveHover}>{option}</div>
    )
    return (
        <div className='optionList' >
            {subSubjectList}
        </div>
    )
}

export default PickingSubSubject