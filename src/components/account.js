import { useState, useEffect } from "react"
import api from "../api/index.js"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function account() {
  const { uid } = useParams()
  const navigate = useNavigate()
  const [account, setAccount] = useState(null)
  const getAccount = async () => {
    let account = null
    if (uid) {
      account = await api.requestUserById(uid)
    } else {
      account = await api.requestAccount()
    }
    console.log(account)
    if (account && account.dob) {
      account.dob = account.dob.substring(0,10)
    }
    setAccount(account)
  }
  const updateAccount = async () => {
    const result = await api.updateAccount(account)
    console.log(result)
  }
  const signout = async () => {
    const result = await api.requestSignout()
    navigate("/signin")
  }
  useEffect(() => {
    getAccount();
  },[])
  return (
    <div className="container m-5">
      <h1>Account</h1>
    {account === null ? <h1>Please Login first</h1> : (
      <div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={account.username} disabled></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control"
            value={account.password}
            onChange={(e) => setAccount({...account, password: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">FirstName</label>
          <input className="form-control"
            value={account.firstName}
            onChange={(e) => setAccount({...account, firstName: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">LastName</label>
          <input className="form-control"
            value={account.lastName}
            onChange={(e) => setAccount({...account, lastName: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Dob</label>
          <input className="form-control"
            value={account.dob}
            type="date"
            onChange={(e) => setAccount({...account, dob: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input className="form-control"
            value={account.email}
            onChange={(e) => setAccount({...account, email: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input className="form-control"
            value={account.role}
            disabled
            onChange={(e) => setAccount({...account, role: e.target.value})}></input>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-primary" onClick={updateAccount}>Update</button>
          <Link className="btn btn-warning" to="/admin/users">Users</Link>
          { uid?<div></div>:<button className="btn btn-danger" onClick={(e) => signout()}>Sign out</button>}
        </div>
      </div>
    )}
    </div>
  )
}