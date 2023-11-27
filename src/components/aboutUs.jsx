import { useRef } from 'react'
import temporaryPic from '../assets/newYorkPic.svg'
import arrow from '../assets/downArrow.svg'
import './aboutUs.css'

const AboutUs = () => {

    const paragraphRef = useRef(null);

    function scrollingDown () {
        paragraphRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <div className='aboutContainer'>
            <div className='showUs' style={{backgroundImage: `URL(${temporaryPic})`}} >
                {/* <img src={temporaryPic} alt="temp" className='showUs'/> */}
                <img src={arrow} alt="arrow" className='downArrow down' onClick={scrollingDown} />
            </div>
            <div className='explainMador' ref={paragraphRef}>
                מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
            </div>
        </div>
    )
}

export default AboutUs