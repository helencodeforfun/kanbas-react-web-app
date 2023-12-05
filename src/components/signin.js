import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/index.js"

function Signin() {
  const [ credentials, setCredentials ] = useState({ username: "", password: ""})
  const navigate = useNavigate();
  const signin = async () => {
    console.log("login",credentials)
    await api.requestSigin(credentials);
    navigate("/account")
  }
  return (
    <form className="card m-auto mt-5" style={{ width: 40+'rem' }}>
      <div className="card-body">
        <h2 className="card-title">Sign in</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}></input>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="button" onClick={signin} >Submit</button>
          <button className="btn">Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default Signin