import React from 'react'
import './Benefits.css'
import Onlineclass from '../images/onlineClass.png'
import material from '../images/material-removebg-preview.png'
import mentor from '../images/Mentorship-removebg-preview.png'
import doubt from '../images/doubt-removebg-preview.png'
import softSkill from '../images/softskill-removebg-preview.png'
import placement from '../images/placement-removebg-preview.png'
import cerificate from '../images/certifiacate-removebg-preview.png'
import graduate from '../images/graduate.png'
import schedule from '../images/schedule-removebg-preview.png'
import tutor from '../images/tutor-removebg-preview.png'
import courses from '../images/courses-removebg-preview.png'

const Benefits = () => {
    return (
        <>
            <div id="benefits" className='benefits'>
                <div className="benefits1">
                    <h2 className="benefits-title">
                        Benefits About Our Online Learning Expertise
                    </h2>
                    <div className="b-lists">
                        {/* 1 */}
                        <div className="b-leftList">
                            <div className="left-img">
                                <img src={Onlineclass} alt='class' />
                            </div>
                            <div className="left-details">
                                <div className="left-details1">
                                    <h3 className="b-listTitle">
                                        Online Classes
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* 2 */}
                        <div className="b-rightList">
                            <div className="right-details">
                                <div className="right-details1">
                                    <h3 className="b-listTitle">
                                        Study Material
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src={material} alt="material" />
                            </div>
                        </div>


                        {/* 3 */}
                        <div className="b-leftList">
                            <div className="left-img">
                                <img src={mentor} alt='mentor' />
                            </div>
                            <div className="left-details">
                                <div className="left-details1">
                                    <h3 className="b-listTitle">
                                        Mentor Support
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* 4 */}
                        <div className="b-rightList">
                            <div className="right-details">
                                <div className="right-details1">
                                    <h3 className="b-listTitle">
                                        Doubt Sessions
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src={doubt} alt="doubt" />
                            </div>
                        </div>




                        {/* 5 */}
                        <div className="b-leftList">
                            <div className="left-img">
                                <img src={softSkill} alt='softSkill' />
                            </div>
                            <div className="left-details">
                                <div className="left-details1">
                                    <h3 className="b-listTitle">
                                        Soft Skill Classes
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* 6 */}
                        <div className="b-rightList">
                            <div className="right-details">
                                <div className="right-details1">
                                    <h3 className="b-listTitle">
                                        Placement Support
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src={placement} alt="placement" />
                            </div>
                        </div>


                        {/* 7 */}
                        <div className="b-leftList">
                            <div className="left-img">
                                <img src={cerificate} alt='cerificate' />
                            </div>
                            <div className="left-details">
                                <div className="left-details1">
                                    <h3 className="b-listTitle">
                                        Certificate
                                    </h3>
                                    <p className="b-details">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem commodi labore explicabo dicta laboriosam sequi voluptas eius, deleniti consectetur nisi amet optio aliqu... <span>more</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* all details about education */}

                <div className="all-details">
                    <div className="detail-card card1">
                        <img src={graduate} alt="graduate" className='graduate' />
                        <div className="d-status">
                            <h3 className='d-total'>4500+</h3>
                            <span className='d-title'>Success Stories</span>
                        </div>
                    </div>
                    <div className="detail-card card2">
                        <img src={tutor} alt="tutor" className='tutor' />
                        <div className="d-status">
                            <h3 className='d-total'>280</h3>
                            <span className='d-title'>Experienced Tutors</span>
                        </div>
                    </div>
                    <div className="detail-card card1">
                        <img src={schedule} alt="schedule" className='schedule' />
                        <div className="d-status">
                            <h3 className='d-total'>550+</h3>
                            <span className='d-title'>Schedules</span>
                        </div>
                    </div>
                    <div className="detail-card card2">
                        <img src={courses} alt="courses" className='courses' />
                        <div className="d-status">
                            <h3 className='d-total'>440</h3>
                            <span className='d-title'>Courses</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Benefits