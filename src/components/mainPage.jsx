import { useRef, useState } from 'react'
import temporaryPic from '../assets/newYorkPic.svg'
import backgroundSection from '../assets/backgroundSection2.svg'
import arrow from '../assets/downArrow.svg'
import videoMador from '../assets/videoMador.mp4'
import NotebookIcon from '../assets/notebookIcon.jpg'
import './mainPage.css'
import PickingSubSubject from './pickingSubSubject'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainPage = (props) => {
    const paragraphRef = useRef(null);

    const allTypesOfDIY = props.navbarMenu[2]["list"].map((card) => 
        <div className="cardForDIY" key={card}><img src={NotebookIcon} className='iconForCard'/><div style={{ paddingRight: "0.5vw", fontSize: "2rem"}}>{card}</div></div>
    );

    
    function scrollingDown () {
        paragraphRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    };
    if (props.aboutUsPage === true) {
        scrollingDown();
    }

    return (
        <div>
            <section id="section1" className='showUs' style={{backgroundImage: `URL(${temporaryPic})`}} >
                <img src={arrow} alt="arrow" className='downArrow down' onClick={scrollingDown} />
            </section>
            <section ref={paragraphRef} id="section2" className='section2'
            //  style={{ backgroundImage: `URL(${backgroundSection})`}}
             >
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
                <PickingSubSubject navbarMenu={props.navbarMenu} changePage={props.changePage} />
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={true}
                    className="carouselContainer"
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >
                    {allTypesOfDIY}
                </Carousel>
            </section>
        </div>
    )
}

export default MainPage