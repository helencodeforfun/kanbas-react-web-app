import React from "react";
function CoursesButtons() {
  return (
    <div className="d-flex justify-content-between p-1">
      <h2>Modules</h2>
      <div className="d-flex">
        <button className="btn btn-light">Collapse All</button>
        <button className="btn btn-light">View Progress</button>
        <button className="btn btn-light">
          <i className="fa-solid fa-circle-check text-success"></i>
          <span className="mx-2">Publish All</span>
          <i className="fa-solid fa-caret-down text-secondary"></i>
        </button>
        <button className="btn btn-danger">
          <i className="fa-solid fa-plus"></i>
          <span className="ms-1">Modules</span>
        </button>
        <button className="btn btn-light">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
    </div>
  )
}
export default CoursesButtons