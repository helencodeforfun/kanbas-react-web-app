import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function kanbas() {
  const routes = [
    {path: "Account", component: Account },
    {path: "Dashboard", component: Dashboard },
    {path: "Courses/:courseId/*", component: Courses },
  ]
  return (
    <div className="d-flex container-fluid p-0">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard"/>}/>
      {
        routes.map((route,index)=>(
          <Route key={index} path={`${route.path}`} Component={route.component}></Route>
        ))
      }
      </Routes>
    </div>
  )
}

export default kanbas;