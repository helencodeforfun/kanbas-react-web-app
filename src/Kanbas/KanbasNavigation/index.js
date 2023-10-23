import React from "react"
import { Link, useLocation } from 'react-router-dom'

import "./index.css"

function KanbasNavigation() {
  const items = [
    { name: "Account", ico:"fa-regular fa-circle-user" },
    { name: "Dashboard", ico:"fa-solid fa-gauge-high" },
    { name: "Courses", ico:"fa-solid fa-book" },
    { name: "Calendar", ico:"fa-solid fa-calendar-days" },
    { name: "Inbox", ico:"fa-solid fa-inbox" },
    { name: "History", ico:"fa-solid fa-clock-rotate-left" },
    { name: "Studio", ico:"fa-solid fa-tv" },
    { name: "Commons", ico:"fa-solid fa-comments" },
    { name: "Help", ico:"fa-regular fa-circle-question" },
  ]
  const location = useLocation()
  return (
    <div className="navbar ">
      <ul className="nav flex-column">
        <li class="nav-item p-2"><i class="logo fa-solid fa-n"></i></li>
      {
        items.map((item,index)=> (
          <li key={index} className="nav-item">
            <Link to={`/kanbas/${item.name}`} className={`nav-link ${location.pathname.includes(item.name) && "active"}`}>
              <i className={`${item.ico} ${item.name==="Account" && "text-secondary"}`}></i>
              <span>{item.name}</span>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
export default KanbasNavigation