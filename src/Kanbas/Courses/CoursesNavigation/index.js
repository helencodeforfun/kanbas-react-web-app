import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"

function CoursesNavigation() {
  const items = [
    "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
    "Grades", "People", "Panopto Video", "Discussions", "Announcements",
    "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const path = pathArray[pathArray.length - 1].replace("%20", " ");

  return (
    <div className="list-group courseNavigation" style={{ width: 155 }}>
      {items.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${path.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );   
}
export default CoursesNavigation