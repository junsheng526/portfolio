import React, { useState } from 'react'
import "./qualification.css"
import constData from '../../constants/constants';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{constData.education[0].title}</h3>
                                <span className="qualification__subtitle">{constData.education[0].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.education[0].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{constData.education[1].title}</h3>
                                <span className="qualification__subtitle">{constData.education[1].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.education[1].date}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{constData.education[2].title}</h3>
                                <span className="qualification__subtitle">{constData.education[2].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.education[2].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{constData.education[3].title}</h3>
                                <span className="qualification__subtitle">{constData.education[3].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.education[3].date}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{constData.experience[0].title}</h3>
                                <span className="qualification__subtitle">{constData.experience[0].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.experience[0].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{constData.experience[1].title}</h3>
                                <span className="qualification__subtitle">{constData.experience[1].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.experience[1].date}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{constData.experience[2].title}</h3>
                                <span className="qualification__subtitle">{constData.experience[2].subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {constData.experience[2].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification