import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Signin from "./components/signin.js";
import SideBar from "./components/sidebar.js"
import Account from "./components/account.js"
import Signup from "./components/signup.js";
import Users from "./components/users.js"

function App() {
  return (
    <div className="container-fluid row">
      <div className="col-2">
        <SideBar></SideBar>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<h1>Home</h1>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/admin/users" element={<Users></Users>}></Route>
          <Route path="/account/:uid" element={<Account></Account>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;