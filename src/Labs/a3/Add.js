import React from "react";
import { useParams } from "react-router-dom";

function Add(){
  const {a,b} = useParams(); 

  return(
      <div>
          <h2>Add Parameters</h2>
          {a} + {b} = {parseInt(a) + parseInt(b)}<br/>
          {/* {a} + {a} = { parseInt(a) + parseInt(a)}<br/>  */}
          {/* {b} + {b} = { parseInt(b) + parseInt(b)}  */}
          <h6>Succesfully parsed /a3/add/{a}/{b}</h6>


      </div>
  );
}

export default Add;