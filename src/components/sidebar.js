import { Link, useLocation } from "react-router-dom";

function sidebar() {
  const location = useLocation()
  const isActive = (path) => {
    console.log(location.pathname)
    return location.pathname === path ? "active" : ""
  }
  const routes = [
    "/home",
    "/search",
    "/signin",
    "/signup",
    "/account"
  ]
  return (
    <ul className="nav flex-column nav-pills nav-fill mt-5">
      {routes.map((v,i) => (
        <li className="nav-item mb-3">
          <Link className={"nav-link "+isActive(v)} to={v}>{v.replace("/","").toLocaleUpperCase()}</Link>
        </li>
        ))
      }
    </ul>
  )
}

export default sidebar