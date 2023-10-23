import React from "react";
import db from "../../database"
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams()
  const assignments = db.assignments.filter((a) => (a.course === courseId))
  const enrollments = db.enrollments.filter((e) => (e.course === courseId))
  
  return (
    <div className="col">
    <div className="container-fluid d-flex justify-content-end mt-2">
      <button className="btn btn-light"><i className="fa-solid fa-file-import mx-2"></i>Import</button>
      <div className="dropdown">
        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-file-export mx-2"></i>Export
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <button className="btn btn-light ms-3"><i className="fa-solid fa-gear"></i></button>
    </div>
    <div className="container-fluid row">
      <div className="col">
        <label className="fw-bold form-label">Student Names</label>
        <div className="input-group">
          <i className="input-group-text fa-solid fa-magnifying-glass"></i>
          <input type="text" className="form-control" placeholder="Search students" />
          <i className="input-group-text fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="col">
        <label className="fw-bold form-label">Assignment Names</label>
        <div className="input-group">
          <i className="input-group-text fa-solid fa-magnifying-glass"></i>
          <input type="text" className="form-control" placeholder="Search Assignments" />
          <i className="input-group-text fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-1">
      <button className="btn btn-light"><i className="mx-2 fa-solid fa-filter"></i>Apply Filters</button>
    </div>
    <h2>Gradebook</h2>
    <table className="table table-striped table-bordered">
       <thead>
          <th className="py-3">Student Name</th>
         {assignments.map((a) => (<th className="py-3">{a.title}</th>))}
         </thead>
       <tbody>
          {enrollments.map(enrollment => {
           const user = db.users.find(u => u._id === enrollment.user)
             return (
               <tr>
                <td className="text-danger">{user.firstname} {user.lastname}</td>
                {assignments.map(assignment => {
                  const grade = db.grades.find(grade => grade.student === enrollment.user && grade.assignment === assignment._id)
                   return (<td>{grade ? grade.grade : ""}</td>)
                })}
            </tr>
            )
          })}
        </tbody>
       </table>
  </div>
);
}
export default Grades