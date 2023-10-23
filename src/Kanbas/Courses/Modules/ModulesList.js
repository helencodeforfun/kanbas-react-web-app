import React from "react";
import db from "../../database"
import { useParams } from "react-router-dom";

function ModulesList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
    {
      modules.filter((module) => module.course === courseId)
      .map((module,index) => (
        <li key={index} className="list-group-item d-flex justify-content-between bg-light my-3 border">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-grip-vertical text-secondary"></i>
            <span class="fw-medium">{module.name}</span>
          </div>
          <div class="d-flex gap-4 align-items-center">
            <i class="fa-solid fa-circle-check text-success"></i>
            <i class="fa-solid fa-ellipsis-vertical text-secondary"></i>
          </div>
        </li>
      ))
    }
    </ul>
  )
}
export default ModulesList