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
        <div className='mainContainer'>
            <section id="section1">
                <div className='showUs' style={{backgroundImage: `URL(${temporaryPic})`}} >
                    <img src={arrow} alt="arrow" className='downArrow down' onClick={scrollingDown} />
                </div>
            </section>
            <section style={{ height: "50vh"}} id="section2" >
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