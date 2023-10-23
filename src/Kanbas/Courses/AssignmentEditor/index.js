import React from "react";
import db from "../../database"
import { Link, useNavigate, useParams } from "react-router-dom";
function AssignmentEditor() {
  const { assignmentId } = useParams()
  const navigate = useNavigate()
  const assignment = db.assignments.find((a) => a._id === assignmentId)
  const handleSave = ()=>{
    console.log("saved")
    navigate(`/Kanbas/Courses/${assignment.course}/Assignments`)
  }
  return (
    <div className="container-fluid">
    <div className="container-fluid mt-2 d-flex justify-content-end">
    <button style={{ backgroundColor: 'green', color: 'white' }} className="btn">
      <i className="fa-solid fa-circle-check mx-2"></i>Published
    </button>
    <button className="btn btn-light">
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </button>
  </div>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input className="form-control" value={assignment.title}></input>
      </div>
      <hr/>
      <div className="d-flex p-2 justify-content-end">
        <Link className="btn btn-light" to={`/kanbas/Courses/${assignment.course}/Assignments`}>Cancel</Link>
        <button className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}
export default AssignmentEditor