import React from 'react'
import constData from '../../constants/constants'

const Social = () => {
    return (
        <div className="home__social">
            <a href={constData.social.instagram} className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>

            <a href={constData.social.linkedin} className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href={constData.social.github} className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social