import React from 'react'
import './Course.css'
import { courseData } from './CourseData'

const Course = () => {
  return (
<>
<div className="courses" id="courses">
    <h2 className="course-title">Our All Online Courses</h2>
    <div className="course-container">

    {courseData.map((item)=>(
     <div className="course-box" key={item.id}>


     <div className="course-img">
     <img src={item.img} alt="CourseImages" />
     </div>
     <h4 className="course-name">{item.name}</h4>
     <span className="total-courses">{item.totalCourse} Courses</span>
 </div>
    ))}
   
       
    </div>
</div>
</>
  )
}

export default Course
