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