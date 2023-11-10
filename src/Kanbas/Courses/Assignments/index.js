import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../database"
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments
} from "./assignmentsReducer"
import { addAssignmentForCourse, deleteAssignmentsForCourse, findAssignmentsForCourse } from "./clients";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments)
  const assignment = useSelector((state) => state.assignmentsReducer.assignment)
  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) => dispatch(setAssignments(assignments)))
  },[courseId])
  const handleDeleteAssignment = (assignmentId) => {
    deleteAssignmentsForCourse(assignmentId).then((status) => dispatch(deleteAssignment(assignmentId)))
  }
  const dispatch = useDispatch()

  return (
    <div className="container-fluid">
      <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Warning</h1>
            </div>
            <div className="modal-bdoy p-5">
              <span className="" >
                Are you sure you want to deletet this assignment?
              </span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={() => handleDeleteAssignment(assignment._id)} data-bs-dismiss="modal">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <input className="form-control w-50"></input>
        <div>
          <button className="btn btn-light" type="button"><i className="fa-solid fa-plus"></i> Group</button>
          <Link className="btn btn-danger" type="button" to={`new`} onClick={() => dispatch(setAssignment({...assignment,course:courseId}))}><i className="fa-solid fa-plus"></i> Assignment</Link>
          <button className="btn btn-light" type="button"><i className="fa-solid fa-ellipsis-vertical py-1"></i></button>
        </div>
      </div>
      <hr className="my-3" />
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between bg-grey py-3">
          <div className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-grip-vertical grey"></i>
            <i className="fa-solid fa-angle-down"></i>
            <span className="fw-medium">Assignments</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="rounded-pill border px-2">40% of Total</span>
            <i className="fa-solid fa-plus grey"></i>
            <i className="fa-solid fa-ellipsis-vertical ms-2"></i>
          </div>
        </li>
      </ul>
      <h2 className="my-2">Assignments for Course {courseId}</h2>
      <ul className="list-group">
        <li className="d-flex py-3 justify-content-between bg-light list-group-item">
          <div className="d-flex">
            <i className="fa-solid mt-1 fa-grip-vertical text-secondary"></i>
            <i className="mx-3 mt-1 fa-solid fa-caret-down"></i>
            <h5 className="fw-bold">ASSIGNMENTS</h5>
          </div>
          <div className="d-flex">
            <i className="mt-2 fa-solid fa-plus text-secondary"></i>
            <i className="text-secondary ms-3 mt-2 fa-solid fa-ellipsis-vertical"></i>
          </div>
        </li>
        {
          assignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item d-flex py-3 justify-content-between">
              <div className="d-flex">
                <i className="fa-solid mt-3 fa-grip-vertical text-secondary"></i>
                <i className="text-success mx-4 mt-3 fa-solid fa-newspaper"></i>
                <div className="d-block">
                  <Link className="nav-link fs-5 fw-bold" to={`${assignment._id}`} onClick={() => dispatch(setAssignment(assignment))}>{assignment.title}</Link>
                  <div className="text-secondary"><span className="text-danger">{assignment.course}</span> | {`Due at ${assignment.dueDate}`} | 100pts</div>
                </div>
              </div>
              <div className="d-flex mt-3">
                <i className="fa-solid fa-circle-check text-success me-4"></i>
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal" onClick={() => dispatch(setAssignment(assignment))}>Delete</button>
                <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
// function Assignments() {
//   const { courseId } = useParams()
//   const assignments = db.assignments
//   const courseAssngnments = assignments.filter((assignment) => assignment.course === courseId)
//   return (
//     <div className="container-fluid">
//       <h2 className="my-2">Assignments for Course {courseId}</h2>
//       <ul className="list-group">
//         <li className="d-flex py-3 justify-content-between bg-light list-group-item">
//           <div className="d-flex">
//             <i className="fa-solid mt-1 fa-grip-vertical text-secondary"></i>
//             <i className="mx-3 mt-1 fa-solid fa-caret-down"></i>
//             <h5 className="fw-bold">ASSIGNMENTS</h5>
//           </div>
//           <div className="d-flex">
//             <i className="mt-2 fa-solid fa-plus text-secondary"></i>
//             <i className="text-secondary ms-3 mt-2 fa-solid fa-ellipsis-vertical"></i>
//           </div>
//         </li>
//         {
//           courseAssngnments.map((assignment) => (
//             <li className="list-group-item d-flex py-3 justify-content-between">
//               <div className="d-flex">
//                 <i className="fa-solid mt-3 fa-grip-vertical text-secondary"></i>
//                 <i className="text-success mx-4 mt-3 fa-solid fa-newspaper"></i>
//                 <div className="d-block">
//                   <Link className="nav-link fs-5 fw-bold" to={`${assignment._id}`}>{assignment.title}</Link>
//                   <div className="text-secondary"><span className="text-danger">{assignment.course}</span> | Due Sep 18 at 18:00 | 100pts</div>
//                 </div>
//               </div>
//               <div className="d-flex mt-3">
//                 <i className="fa-solid fa-circle-check text-success me-4"></i>
//                 <i className="fa-solid fa-ellipsis-vertical text-secondary"></i>
//               </div>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }
export default Assignments