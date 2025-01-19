import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Chip from '@mui/material/Chip';
import './Experience.css';
import work_history from './work_history_data';

const Experience = () => {
        const reversedWorkHistory = [...work_history].reverse(); 
        return (
                <div id="experience" className="experience">
                <h1>Experience</h1>
                <div className="timeline">
                        <VerticalTimeline className="timeline-vertical" lineColor="linear-gradient(180deg, #f83f0b 10%, #571183 100%)">
                        {reversedWorkHistory && reversedWorkHistory.length > 0 ? (
                                reversedWorkHistory.map((job_history, index) => (
                                <VerticalTimelineElement
                                        key={job_history.id || index} // Use `id` if available, fallback to `index`
                                        className="job"
                                        contentArrowStyle={{ borderRight: '10px solid white' }}
                                        textClassName="job-description"
                                        dateClassName="job-date"
                                        date={job_history.date}
                                        iconStyle={{ background: 'linear-gradient(270deg, #f83f0b 10%, #571183 100%)' }}
                                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                                >
                                        <h3 className="job-title">{job_history.title}</h3>
                                        <h4 className="job-city">{job_history.city}</h4>
                                        <p className="job-duties">{job_history.description}</p>
                                        <div className="job-tool-flex-chips">
                                        {job_history.tools &&
                                                job_history.tools.map((tool, index) => (
                                                <Chip key={index} className="job-tool-chip" label={tool} />
                                                ))}
                                        </div>
                                </VerticalTimelineElement>
                                ))
                        ) : (
                                <p>No work history available.</p>
                        )}
                        </VerticalTimeline>
                </div>
                </div>
        );
};

export default Experience;
