import React from 'react'

// CSS
import "./AboutMe.css"

// Components
import AboutMeCard from '../../../../about_me_card/AboutMeCard'

const AboutMe = () => {
    return (
        <React.Fragment>
            <div id="aboutme-page-container" className="aboutme-page-container">
                <AboutMeCard></AboutMeCard>
            </div>
            
        </React.Fragment>
    )
}

export default AboutMe
