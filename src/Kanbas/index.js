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
import { Route, Routes, Navigate} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas(){
    return(
    <div className="d-flex page-content" >
        {/* <Nav/> */}
        {/* <h1>Kanbas</h1> <br/> */}
        <KanbasNavigation/>
        {/* <Account/> */}
        <div>
        <Routes>
            <Route  path="/" element={<Navigate to="dashboard"/>} />
            <Route  path="account" element={<h1>Account</h1>} />
            <Route  path="dashboard" element={<Dashboard/>} />
            <Route  path="courses/:courseId/*" element={ <Courses/>} /> 
            
        </Routes>

        </div>


    </div>


    )
}

export default Kanbas;