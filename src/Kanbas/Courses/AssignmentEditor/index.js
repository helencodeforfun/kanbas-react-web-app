import React from "react";
import db from "../../database"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment,deleteAssignment,updateAssignment,setAssignment } from "../Assignments/assignmentsReducer";
import { addAssignmentForCourse, updateAssignmentsForCourse } from "../Assignments/clients";
function AssignmentEditor() {
  const { assignmentId,courseId } = useParams()
  console.log(assignmentId)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const assignment = useSelector((state) => state.assignmentsReducer.assignment)
  const handleSave = ()=>{
    console.log("saved")
    if (assignmentId === "new") {
      console.log("add")
      addAssignmentForCourse(courseId,assignment).then((assignment) => {dispatch(addAssignment(assignment))})
    } else {
      console.log("update")
      updateAssignmentsForCourse(assignment).then(status => dispatch(updateAssignment(assignment)))
    }
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
        <input className="form-control" value={assignment.title} onChange={
          (e) => dispatch(setAssignment({...assignment,title:e.target.value}))}></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Assignment Description</label>
        <textarea className="form-control" value={assignment.description} onChange={
          (e) => dispatch(setAssignment({...assignment, description: e.target.value}))}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input className="form-control" type="date" value={assignment.dueDate} onChange={
          (e) => dispatch(setAssignment({...assignment, dueDate: e.target.value}))}></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Available From Date</label>
        <input className="form-control" type="date" value={assignment.availableFromDate} onChange={
          (e)=> dispatch(setAssignment({...assignment,availableFromDate:e.target.value}))}></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Available until Date</label>
        <input className="form-control" type="date" value={assignment.availableUntilDate} onChange={
          (e)=>dispatch(setAssignment({...assignment,availableUntilDate:e.target.value}))}></input>
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