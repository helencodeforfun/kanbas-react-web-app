import React from "react";
import ModulesList from "./ModulesList";
import CoursesButtons from "../CoursesButtons";

function Modules() {
  return (
    <div className="container-fluid">
      <CoursesButtons />
      <hr className="my-0 mt-2"/>
      <ModulesList />
    </div>
  )
}
export default Modules