// import React from "react";
// import KanbasNavigation from "./KanbasNavigation";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import Courses from "./Courses";

// function kanbas() {
//   const routes = [
//     {path: "Account", component: Account },
//     {path: "Dashboard", component: Dashboard },
//     {path: "Courses/:courseId/*", component: Courses },
//   ]
//   return (
//     <div className="d-flex container-fluid p-0">
//       <KanbasNavigation />
//       <Routes>
//         <Route path="/" element={<Navigate to="Dashboard"/>}/>
//       {
//         routes.map((route,index)=>(
//           <Route key={index} path={`${route.path}`} Component={route.component}></Route>
//         ))
//       }
//       </Routes>
//     </div>
//   )
// }

// export default kanbas;
import React from "react";
import { useState } from "react";
import db from "./database";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New number",
    startDate: "2023-01-01",
    endDate: "2023-01-01",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const deleteCourse = courseId => {
    setCourses(courses.filter(course => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex page-content">
        {/* <Nav/> */}
        {/* <h1>Kanbas</h1> <br/> */}
        <KanbasNavigation />
        {/* <Account/> */}
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="account" element={<h1>Account</h1>} />
            <Route
              path="dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
