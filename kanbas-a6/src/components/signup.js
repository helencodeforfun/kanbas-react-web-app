import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/index.js"

export default function signup() {
  const [ credentials, setCredentials] = useState({
    username:"", password: ""
  })
  const [ error, setError ] = useState("")
  const navigate = useNavigate()
  const signup = async () => {
    try {
      console.log(credentials)
      await api.requestSignup(credentials)
      navigate("/account")
    } catch(e) {
      console.log(e)
      setError(e)
    }
  }

  return (
    <form className="card m-auto mt-5" style={{ width: 50+'rem' }}>
      <div className="card-body">
        <h1 className="card-title">Sign Up</h1>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username:e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control"
            value={credentials.password}
            type="password"
            onChange={(e) => setCredentials({ ...credentials, password:e.target.value})}></input>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="button" onClick={signup}>Confirm</button>
        </div>
      </div>
    </form>
  )
}