import React from "react";
import db from "../database"
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses
  return (
    <div className="container-fluid">
      <h1 className="fw-normal">Dashboard</h1>
      <hr/>
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
                  <button className="btn p-0 py-2"><i className="fa-solid fa-file-export text-secondary fa-xl"></i></button>
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