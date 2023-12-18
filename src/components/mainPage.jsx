import { useRef, useState } from 'react'
import temporaryPic from '../assets/newYorkPic.svg'
import arrow from '../assets/downArrow.svg'
import videoMador from '../assets/videoMador.mp4'
import './mainPage.css'
import PickingSubSubject from './pickingSubSubject'

const MainPage = (props) => {
    const paragraphRef = useRef(null);

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
                <div className='videoMador'>
                    <video src={videoMador} className='video' type="video/mp4" controls="controls" autoPlay={true} />
                </div>
                <div className='explainMador'>
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