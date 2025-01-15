import React from 'react'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import './Experience.css'

const Experience = () => {
return (
    <div className='experience'>
            <h1>Experience</h1>
            <div className="timeline">
                <VerticalTimeline lineColor='linear-gradient(180deg, #f76f07 10%, #571183 100%)'>
                    <VerticalTimelineElement
                            className="job"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            dateClassName='date'
                            date="2022 - present"
                            iconClassName='icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f76f07 10%, #571183 100%)' }}
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
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            dateClassName='date'
                            date="2022 - present"
                            iconClassName='icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f76f07 10%, #571183 100%)' }}
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
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            dateClassName='date'
                            date="2022 - present"
                            iconClassName='icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f76f07 10%, #571183 100%)' }}
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
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            dateClassName='date'
                            date="2022 - present"
                            iconClassName='icon'
                            iconStyle={{ color: 'white', background: 'linear-gradient(270deg, #f76f07 10%, #571183 100%)' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                            <h3 className="job-title">Technology Consultant</h3>
                            <h4 className="job-city">Dallas, TX</h4>
                            <p>
                            Full-stack Web Development, GenAI/LLM, Project Management, Business Development
                            </p>
                    </VerticalTimelineElement>
                l</VerticalTimeline>
            </div>
    </div>
)
}

export default Experience