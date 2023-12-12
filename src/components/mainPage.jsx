import { useRef, useState } from 'react'
import temporaryPic from '../assets/newYorkPic.svg'
import arrow from '../assets/downArrow.svg'
import './mainPage.css'
import PickingSubSubject from './pickingSubSubject'

const MainPage = (props) => {
    const paragraphRef = useRef(null);
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

    function scrollingDown () {
        paragraphRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <div>
            <section id="section1" className='showUs' style={{backgroundImage: `URL(${temporaryPic})`}} >
                <img src={arrow} alt="arrow" className='downArrow down' onClick={scrollingDown} />
            </section>
            <section ref={paragraphRef} id="section2" className='section2'>
                <div className={'videoMador'} onMouseEnter={toggleHover} onMouseLeave={leaveHover}>
                    videoMador videoMador videoMador videoMador videoMador videoMador videoMador videoMador videoMador
                    videoMador videoMador videoMador videoMador videoMador videoMador videoMador videoMador videoMador
                </div>
                <div className='explainMador'  onMouseEnter={toggleHover} onMouseLeave={leaveHover}>
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                </div>
            </section>
            <section id="section3" className='section3'>
                <PickingSubSubject navbarMenu={props.navbarMenu} />
            </section>
        </div>
    )
}

export default MainPage