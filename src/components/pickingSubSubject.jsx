import { useState } from 'react'
import './pickingSubSubject.css'

const PickingSubSubject = (props) => {
    const [hovered, setHovered] = useState(false);
    const subSubjectGallery = props.navbarMenu[1];
    const explainSubject = [
        {
            title: 'לומדות',
            explain: 'explain what is lomda you know what is lomda explain explain explain explain'
        },
        {
            title: 'תמונות',
            explain: 'explain what is lomda you know what is lomda explain explain explain explain'
        },
        {
            title: 'סרטים',
            explain: 'explain what is lomda you know what is lomda explain explain explain explain'
        },
        {
            title: 'מצגות',
            explain: 'explain what is lomda you know what is lomda explain explain explain explain'
        },
    ]
    
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
    
    const explainList = explainSubject.map((option) => {
        console.log(option.explain)
        // <div className='explainationAboutText'>{option.explain}</div>
    })
    
    const subSubjectList = subSubjectGallery.list.map((option) => 
        <div key={option} className='allOption'>
            <div className="optionToChoose" onMouseEnter={toggleHover} onMouseLeave={leaveHover}>{option}</div>
            {explainList}
        </div>
    )

    return (
        <div className='optionList' >
            {subSubjectList}
        </div>
    )
}

export default PickingSubSubject