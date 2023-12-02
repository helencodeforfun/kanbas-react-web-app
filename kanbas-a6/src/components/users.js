import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api/index.js"

export default function users() {
  const defaultUserValue = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER"
  }
  const [ users, setUsers ] = useState([])
  const [ user, setUser ] = useState(defaultUserValue)
  const roleOptions = ["STUDENT", "FACULTY", "ADMIN", "USER"]
  const fetchUsers = async () => {
    const users = await api.requestUsers()
    setUsers(users)
  }
  const addUser = async () => {
    const status = await api.requestCreateUser(user)
    fetchUsers()
    setUser(defaultUserValue)
  }
  const deleteUser = async (uid) => {
    const status = await api.requestDeleteUser(uid)
    fetchUsers()
  }
  const saveUser = async () => {
    const status = await api.requestUpdateUser(user)
    fetchUsers()
  }
  useEffect(() => {
    fetchUsers()
  },[])
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <input className="form-control" value={user.username}
                onChange={(e) => setUser({...user, username:e.target.value})}></input>
            </td>
            <td>
              <input className="form-control" value={user.password}
                type="password"
                onChange={(e) => setUser({ ...user, password:e.target.value})}></input>
            </td>
            <td>
              <input className="form-control" value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName:e.target.value})}></input>
            </td>
            <td>
              <input className="form-control" value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value})}></input>
            </td>
            <td>
              <select className="form-select" value={user.role}
                onChange={(e) => setUser({ ...user, role:e.target.value })}>
              {roleOptions.map((v,i) => (
                <option value={v}>{v.toLowerCase()}</option>
              ))}
              </select>
            </td>
            <td className="d-flex justify-content-between gap-2">
              <button className="btn btn-primary btn-sm" onClick={addUser}>add</button>
              <button className="btn btn-success btn-sm" onClick={saveUser}>Save</button>
            </td>
          </tr>
        {users.map((v,i) => (
          <tr>
            <th scope="row">{i}</th>
            <td>
              <Link className="nav-link" to={`/account/${v._id}`}>{v.username}</Link>
            </td>
            <td>{v.firstName}</td>
            <td>{v.lastName}</td>
            <td>{v.role}</td>
            <td className="d-flex gap-1">
              <button className="btn btn-warning btn-sm" onClick={(e) => setUser(v)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={(e) => deleteUser(v._id)}>Delete</button>
            </td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  )
}