import { useRef } from 'react'
import temporaryPic from '../assets/newYorkPic.svg'
import arrow from '../assets/downArrow.svg'
import './mainPage.css'

const MainPage = () => {

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
            <section id="section2" className='section2'>
                <div className='explainMador' ref={paragraphRef}>
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                    מלא מלא מלא מלא מילים והסבר ממש ממש ממש מפורט על המדור המהמם שלנו.
                </div>
            </section>
        </div>
    )
}

export default MainPage