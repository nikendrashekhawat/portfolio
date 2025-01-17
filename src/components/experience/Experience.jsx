import React from 'react'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import './Experience.css'

const Experience = () => {
return (
    <div className='experience'>
            <h1>Experience</h1>
            <div className="timeline">
                <VerticalTimeline className="timeline-vertical" lineColor='linear-gradient(180deg, #f83f0b 10%, #571183 100%)'>
                    <VerticalTimelineElement
                            className="job"
                            contentStyle={{ }}
                            contentArrowStyle={{ borderRight: '10px solid  white' }}
                            textClassName='job-description'
                            dateClassName='job-date'
                            date="May 2014 – Dec 2017"
                            iconClassName='job-icon'
                            iconStyle={{ background: 'linear-gradient(270deg, #f83f0b 10%, #571183 100%' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                            <h3 className="job-title">Data Analyst</h3>
                            <h4 className="job-city">Vaughan, ON</h4>
                            <p>
                                <ul>
                                        <li>Designed and developed dashboards and reports</li> 
                                        <li>Build weekly and monthly sales and financial reports</li>
                                        <li>Developed machine learning models customer segmentation, market segmentation, sales forecasting</li>
                                        <li>Developed customer segmentation models based on various attributes</li>
                                </ul>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                            className="job"
                            contentStyle={{ }}
                            contentArrowStyle={{ borderRight: '10px solid  white' }}
                            textClassName='job-description'
                            dateClassName='job-date'
                            date="May 2014 – Dec 2017"
                            iconClassName='job-icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f83f0b 10%, #571183 100%)' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                            <h3 className="job-title">Technology Consultant</h3>
                            <h4 className="job-city">Dallas, TX</h4>
                            <p>
                            Full-stack Web Development, GenAI/LLM, Project Management, Business Development
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                            className="job"
                            contentStyle={{ }}
                            contentArrowStyle={{ borderRight: '10px solid  white' }}
                            textClassName='job-description'
                            dateClassName='job-date'
                            date="May 2014 – Dec 2017"
                            iconClassName='job-icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f83f0b 10%, #571183 100%)' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                            <h3 className="job-title">Technology Consultant</h3>
                            <h4 className="job-city">Dallas, TX</h4>
                            <p>
                            Full-stack Web Development, GenAI/LLM, Project Management, Business Development
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                            className="job"
                            contentStyle={{ }}
                            contentArrowStyle={{ borderRight: '10px solid white' }}
                            textClassName='job-description'
                            dateClassName='job-date'
                            date="May 2014 – Dec 2017"
                            iconClassName='job-icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f83f0b 10%, #571183 100%)' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} />}
                    >
                            <h3 className="job-title">Seneca College</h3>
                            <h4 className="job-city">Toronto, ON</h4>
                            <p></p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
    </div>
)
}

export default Experience