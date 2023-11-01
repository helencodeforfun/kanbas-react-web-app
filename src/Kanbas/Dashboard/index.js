import React from "react";
import { useState } from "react";
import db from "../database"
import { Link } from "react-router-dom";

function Dashboard(
  {courses,course,setCourse,addNewCourse,deleteCourse,updateCourse}
) {
  return (
    <div className="container-fluid">
      <h1 className="fw-normal">Dashboard</h1>
      <hr/>
      <div className="mb-3">
        <label>Courses Name:</label>
        <input value={course.name} className="form-control" type="text" onChange={(e) => setCourse({...course,name: e.target.value})}></input>
      </div>
      <div className="mb-3">
        <label>Courses Number:</label>
        <input value={course.number} className="form-control" type="text" onChange={(e) => setCourse({...course,number: e.target.value})}></input>
      </div>
      <div className="mb-3">
        <label>Start Date:</label>
        <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({...course,startDate: e.target.value})}></input>
      </div>
      <div className="mb-3">
        <label>End Date:</label>
        <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({...course,endDate: e.target.value})}></input>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-success" onClick={addNewCourse}>Add</button>
        <button className="btn btn-primary ms-3" onClick={updateCourse}>Update</button>
      </div>
      <div className="p-2">
        <h3>Published Courses (24)</h3>
        <hr className="my-0"/>
        <div className="row mt-3">
        {
          courses.map((course,index)=>(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3" key={index}>
              <Link className="card p-0" to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: "none" }}>
                <img src="..." className="card-img-top" style={{ height:"8rem", background:"darkblue" }} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title text-primary">{course._id}</h5>
                  <h4 className="mb-0">{course.name}</h4>
                  <p className="card-text text-secondary">{course.name}</p>
                  <div className="d-flex">
                    <button className="btn p-0 py-2"><i className="fa-solid fa-file-export text-secondary fa-xl"></i></button>
                    <button className="btn btn-warning ms-auto" onClick={(event) => {event.preventDefault();setCourse(course)}}>Edit</button>
                    <button className="btn btn-danger ms-1" onClick={(event) => {event.preventDefault();deleteCourse(course._id)}}>Delete</button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
export default Dashboard