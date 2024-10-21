import React, { useState } from 'react';
import about_image from '../../assets/about_me.png';
import Skills from './Skills';
import Extracurriculars from './Extracurriculars';
import Education from './Education';

const AboutMe = () => {
    // Manages the active section: "skills", "extracurriculars", or "education"
    const [activeSection, setActiveSection] = useState('skills');

    const handleSectionChange = (section) => {
        console.log(section);
        setActiveSection(section);
    };

    return (
        <div id="about-me">
            <div className="about-me-page">
                <p className="user-header media">init(self)</p>
                <div className="left-container">
                    <div className="user-image">
                        <img src={about_image} alt="user" className="about-image" />
                    </div>
                </div>
                <div className="user-content">
                    <p id="user-header" className="user-header">init(self)</p>
                    <p className="user-description">
                        <span className="user-name">CELINE TRIEU</span> is currently a computer science student at UCI.
                        She is originally from San Diego, CA, and has been there most of her life. She comes from a big Viet-Chinese family and has three other siblings with whom she is very close. She loves watching crime and drama TV shows and enjoys playing lacrosse, thrifting clothes, and reading.
                    </p>
                    {/* Section selection buttons */}
                    <div className="user-table">
                        <div className="sections">
                            <p
                                className={activeSection === 'skills' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={activeSection === 'extracurriculars' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('extracurriculars')}
                            >
                                Extracurriculars
                            </p>
                            <p
                                className={activeSection === 'education' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('education')}
                            >
                                Education
                            </p>
                        </div>

                        {/* Section content */}
                        {activeSection === 'skills' && <Skills />}
                        {activeSection === 'extracurriculars' && <Extracurriculars />}
                        {activeSection === 'education' && <Education />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;