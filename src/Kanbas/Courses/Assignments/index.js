import React from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../database"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssngnments = assignments.filter((assignment) => assignment.course === courseId);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between">
        <input className="form-control" style={{ width: '15rem' }} id="search-assignments" placeholder="Search for Assignments" />
        <div>
          <button className="btn btn-light" type="button"><i className="fa-solid fa-plus"></i> Group</button>
          <button className="btn btn-danger" type="button"><i className="fa-solid fa-plus"></i> Assignment</button>
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
          courseAssngnments.map((assignment) => (
            <li key={assignment._id} className="list-group-item d-flex py-3 justify-content-between">
              <div className="d-flex">
                <i className="fa-solid mt-3 fa-grip-vertical text-secondary"></i>
                <i className="text-success mx-4 mt-3 fa-solid fa-newspaper"></i>
                <div className="d-block">
                  <Link className="nav-link fs-5 fw-bold" to={`${assignment._id}`}>{assignment.title}</Link>
                  <div className="text-secondary"><span className="text-danger">{assignment.course}</span> | Due Sep 18 at 18:00 | 100pts</div>
                </div>
              </div>
              <div className="d-flex mt-3">
                <i className="fa-solid fa-circle-check text-success me-4"></i>
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