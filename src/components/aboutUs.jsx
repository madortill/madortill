import temporaryPic from '../assets/newYorkPic.svg'
import arrow from '../assets/downArrow.svg'
import './aboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <img src={temporaryPic} alt="temp" className='showUs'/>
            <img src={arrow} alt="arrow" className='downArrow down' />
        </div>
    )
}

export default AboutUs