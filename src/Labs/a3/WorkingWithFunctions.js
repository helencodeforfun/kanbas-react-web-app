import React from "react";
import ES5Functions from "./ES5Functions";
import ArrowFunctions  from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParanthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions(){


    return(
        <div>
            <h2>Working With Functions</h2>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParanthesisAndParameters/>

        </div>
    );
}


export default WorkingWithFunctions;