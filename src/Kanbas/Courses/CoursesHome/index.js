import React from "react";
import CoursesButtons from "../CoursesButtons";
import ModulesList from "../Modules/ModulesList";
function CoursesHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-block col-9">
          <CoursesButtons/>
          <hr className="my-1"/>
          <ModulesList/>
        </div>
        <div className="d-block col-3 mt-2">
          <div className="d-grid gap-2">
            <a class="btn btn-light" >
              <i className="fa-solid fa-file-import mx-2"></i>
              Import Existing Content
            </a>
            <a className="btn btn-light " >
              <i className="fa-solid fa-upload mx-2"></i>
              Import From Commons
            </a>
            <a className="btn btn-light " >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              Choose Home Page
            </a>
            <a className="btn btn-light " >
              <i class="fa-solid fa-paperclip mx-2"></i>
              View Course Stream
            </a>
            <a className="btn btn-light " >
              <i class="fa-solid fa-bookmark mx-2"></i>
              New Announcement
            </a>
            <a className="btn btn-light " >
              <i className="fa-solid fa-record-vinyl"></i>
              New Analytics
            </a>
            <a className="btn btn-light " >
              <i className="fa-solid fa-layer-group mx-2"></i>
              View Course Notifications
            </a>
          </div>
          <h5 className="fw-bolder mt-3">To Do</h5>
          <hr className="my-1" />
          <div className="d-flex justify-content-between p-3">
            <i className="text-danger fa-xl fa-solid fa-circle-exclamation ms-2 pt-3"></i>
            <div className="d-block">
              <h5 className="text-danger fw-bold">Grade-1</h5>
              <p className="text-secondary">Start 10:00 end 11:00</p>
            </div>
            <i className="me-2 text-secondary fa-solid fa-xmark pt-1"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CoursesHome