import axios from "axios";
import React, {useEffect, useState} from "react";

function WorkingWithObjects(){

    const [assignment,setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed:false,
        score: 0,
});

const URL = "https://kanbas-node-server-app-2bqh.onrender.com/a5/assignment";
const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
};

const updateTitle = async () => {
    const response = await axios.put(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
}

useEffect(() => {
    fetchAssignment();
},[]);

return(
    <div>
        <h3>Working with Objects</h3>
        <h3>Modifying Properties</h3>
        <button onClick={updateTitle} className="w-100 mb-2">Update Title</button>
        <button onClick={fetchAssignment} className="w-100 mb-2">Fetch Ass</button>
        <h4>{assignment.title}</h4>
        <a href={`${URL}/title/${assignment.title}`} className="btn me-2">Update Title</a>
        <a href="https://kanbas-node-server-app-2bqh.onrender.com/a5/assignment/title" className="btn ">Get Title</a>
        <input onChange={(e) => setAssignment({...assignment, title: e.target.value})} value={assignment.title}/>

        <a href="https://kanbas-node-server-app-2bqh.onrender.com/a5/assignment">Get Ass</a>
        <a href={`${URL}/score/`} className="btn me-2">Get Score</a>
        <a href={`${URL}/score/${assignment.score}`} className="btn me-2">Update Score</a>
        <input onChange={(e) => setAssignment({...assignment, score: e.target.value})} value={assignment.score}/>
        <a href="https://kanbas-node-server-app-2bqh.onrender.com/a5/assignment/completed" className="btn btn-primary me-2"> Get Complete Status</a>
        <a href={`${URL}/completed/${assignment.completed}`} className="btn btn me-2 ">Update Complete Status</a> 
        <input onChange={(e) => setAssignment({...assignment, score: e.target.value})} value={assignment.completed}/>


    </div>

);


}

export default WorkingWithObjects;