// import axios from "axios";
// import React, { useState } from "react";
// function WorkingWithObjects() {
// const [assignment, setAssignment] = useState({
//     id: 1,
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-10-10",
//     completed: false,
//     score: 0,
//     });
//     const URL = 'http://localhost:4000/a5/assignment';
//   return (
//     <div>
//       <h3>Working With Objects</h3>
//       <h4>Modifying Properties</h4>
//       <a
//         href={`${URL}/title/${assignment.title}`}
//         className="btn btn-primary me-2 float-end"
//       >
//         Update Title
//       </a>
//       <input
//         onChange={(e) => setAssignment({ ...assignment,
//             title: e.target.value })}
//         value={assignment.title}
//         className="form-control mb-2 w-75"
//         type="text" />
//       <h4>Retrieving Objects</h4>
//       <a href="http://localhost:4000/a5/assignment"
//          className="btn btn-primary me-2">
//         Get Assignment
//       </a>
//       <h4>Retrieving Properties</h4>
//       <a
//         href="http://localhost:4000/a5/assignment/title"
//         className="btn btn-primary me-2">
//         Get Title
//       </a>
//     </div>
//   );
// }
// export default WorkingWithObjects;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AssignmentManager() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: 'NodeJS Assignment',
        description: 'Create a NodeJS server with ExpressJS',
        due: '2021-10-10',
        completed: false,
        score: 0
    });

    const API_URL = 'https://kanbas-node-server-app-zi6l.onrender.com/a5/assignment';

    // Fetch assignment from the server
    const fetchAssignment = async () => {
        const response = await axios.get(API_URL);
        setAssignment(response.data);
    };

    // Update the title of the assignment
    const updateAssignmentTitle = async () => {
        const response = await axios.get(`${API_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    // Load the assignment when the component mounts
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Assignment Manager</h3>
            <h4>Assignment Details</h4>
            <button onClick={updateAssignmentTitle} className="btn btn-primary mb-2">Update Title: {assignment.title}</button>
            <button onClick={fetchAssignment} className="btn btn-danger mb-2">Refresh Assignment</button>
            <div>
                <label>Assignment Title:</label>
                <input 
                    type="text"
                    onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                    value={assignment.title}
                />
            </div>
            <div>
                <label>Assignment Score:</label>
                <input 
                    type="number"
                    onChange={(e) => setAssignment({...assignment, score: e.target.value})}
                    value={assignment.score}
                />
            </div>
            <div>
                <label>Completion Status:</label>
                <input 
                    type="checkbox"
                    onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}
                    checked={assignment.completed}
                />
            </div>
        </div>
    );
}

export default AssignmentManager;