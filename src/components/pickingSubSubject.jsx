import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pickingSubSubject.css'

const PickingSubSubject = (props) => {
    let navigate = useNavigate();
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

    function choosingSubSubject (event) {
        navigate(`${event.currentTarget.innerText}`);
    }
    
    const subSubjectList = subSubjectGallery.list.map((option, index) => 
        <div key={index} className={index%2 === 0 ? 'allOption' : 'right allOption'}>
            <div className="optionToChoose" onMouseEnter={toggleHover} onMouseLeave={leaveHover} onClick={(event) =>navigate(`${event.currentTarget.innerText}`)}>{option}</div>
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