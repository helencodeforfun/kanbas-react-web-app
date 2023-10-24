import React from "react";
import JavaScript from "./JavaScript";
import PathParamters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";


function Assignment3(){
    return(
        <div className="container">
            {/* //use {{}} to use JavaScript within JSX */}
            {/* <h1 style={{marginLeft: '-30px'}}>Assignment 3</h1> */}
            <h1>Assignment3</h1>
            <TodoList/>
            {/* <TodoItem/> */}
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParamters/>
            <JavaScript/>
            <DynamicStyling/>
            
        </div>
    );
}

export default Assignment3;
