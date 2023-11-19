import React, { useEffect, useState } from "react"
import { useParams, Routes, Navigate, Route } from "react-router"
import {Link, useLocation} from "react-router-dom";
import CoursesNavigation from "./CoursesNavigation"
import Modules from "./Modules"
import CoursesHome from "./CoursesHome"
import Assignments from "./Assignments"
import AssignmentEditor from "./AssignmentEditor"
import Grades from "./Grades"
import { dom } from "aria-query"
import axios from "axios";
function Courses({courses}) {
  // const URL = "http://localhost:4000/api/courses"
  const URL = "https://kanbas-node-server-app-2bqh.onrender.com/api/courses"
  const { courseId } = useParams()
  const { pathname } = useLocation()
  const [course, setCourse] = useState({})
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`)
    setCourse(response.data)
  }
  useEffect(() => {
    findCourseById(courseId)
  },[courseId])
  const path = pathname.split('/');
  console.log(course, "here");
  
  return (
    <div className="container-fluid">
      <div className="d-flex my-2 text-align-center">
        <button className="btn">
          <i className="fa-solid fa-bars fa-2xl text-danger"></i>
        </button>

        {/* <Link className="nav-link text-danger fs-2" to={`/Kanbas/Courses/${course._id}`}>{course._id}</Link> */}
        <nav style={{ "--bs-breadcrumb-divider":">" }} aria-label="breadcrumb">
          <ol className="breadcrumb mt-3 ms-2">
            {/* <p>{course._id}</p> */}
            <li className="breadcrumb-item">   <Link className="nav-link text-danger fs-2" to={`/Kanbas/Courses/${course._id}`}>{course._id}</Link> </li>
            <li className={`breadcrumb-item fw-medium pt-1 fs-3 ${pathname.endsWith(course._id) && "d-none"}`}>
              {pathname.split('/')[pathname.split('/').length-1]}
            </li>
          </ol>
        </nav>
      </div>
      <hr className="my-0 mx-2"/>
      <div className="d-flex">
        <CoursesNavigation/>
        <Routes>
          <Route path="/" element={<Navigate to="Home"/>}/>
          <Route path="Home" element={<CoursesHome/>}/>
          <Route path="Modules" element={<Modules />}/>
          <Route path="Assignments" element={<Assignments/>}/>
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
          <Route path="Grades" element={<Grades/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default Courses