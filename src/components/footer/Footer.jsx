import React from 'react'
import "./footer.css"
import constData from '../../constants/constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Smith</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href={constData.social.instagram} className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href={constData.social.facebook} className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href={constData.social.github} className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; {constData.footer.copywrite}
                </span>
            </div>
        </footer>
    )
}

export default Footer