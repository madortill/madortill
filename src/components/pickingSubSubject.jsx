import { useState } from 'react'
import './pickingSubSubject.css'

const PickingSubSubject = (props) => {
    const [hovered, setHovered] = useState(false);
    const subSubjectGallery = props.navbarMenu[1];
    const explainSubject = [
        {
            title: 'לומדות',
            explain: "explain what is lomda you know what is lomda explain explain explain explain"
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
    
    const subSubjectList = subSubjectGallery.list.map((option, index) => 
        <div key={index} className={index%2 === 0 ? 'allOption' : 'right allOption'}>
            <div className="optionToChoose" onMouseEnter={toggleHover} onMouseLeave={leaveHover} onClick={props.handleChange(option)}>{option}</div>
                {explainSubject.map((sub) => {
                    if (option === sub.title) {
                        return (
                            <div className='explainationAboutText' key={sub.title}>{sub.explain}</div>
                        )
                    }
                })}
        </div>
    )

    return (
        <div className='optionList' >
            {subSubjectList}
        </div>
    )
}

export default PickingSubSubject