import React, { useEffect } from "react";
import { useState } from "react";
import db from "../../database"
import { Form, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./ModulesReducer"
import { createModule, findModuleForCourse } from "./client";
import * as client from "./client"


function ModulesList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModuleForCourse(courseId).then((modules) => dispatch(setModules(modules)))
  },[courseId])
  const handleAddModule = () => {
    createModule(courseId,module).then((module) => {
      dispatch(addModule(module))
    })
  }
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {dispatch(deleteModule(moduleId))})
  }
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module)
    dispatch(updateModule(module))
  }
  const modules = useSelector((state) => state.modulesReducer.modules)
  const module = useSelector((state) => state.modulesReducer.module)
  const dispatch = useDispatch()
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="d-flex mb-2">
          <button className="btn btn-success" onClick={handleAddModule}>Add</button>
          <button className="btn btn-primary ms-2" onClick={() => dispatch(updateModule(module))}>Update</button>
        </div>
        <input className="form-control mb-2" value={module.name} onChange={(e)=>dispatch(setModule({ ...module,name:e.target.value }))}></input>
        <textarea className="form-control" value={module.description} onChange={(e)=>dispatch(setModule({ ...module,description:e.target.value }))}></textarea>
      </li>
    {
      modules.filter((module) => module.course === courseId)
      .map((module,index) => (
        <li key={index} className="list-group-item d-flex justify-content-between bg-light my-3 border">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-grip-vertical text-secondary"></i>
            <span class="fw-medium">{module.name}</span>
          </div>
          <div class="d-flex gap-1 align-items-center">
            <i class="fa-solid fa-circle-check text-success"></i>
            <button className="btn btn-danger" onClick={() => handleDeleteModule(module._id)}>Delete</button>
            <button className="btn btn-warning" onClick={() => dispatch(setModule(module))}>Edit</button>
            <i class="fa-solid fa-ellipsis-vertical text-secondary"></i>
          </div>
        </li>
      ))
    }
    </ul>
  )
}
export default ModulesList