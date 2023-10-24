import React from 'react';
function JsonStringify(){

    const squares = [1,4,16,25,36];

    return(
        <>
        <h3>JSON Stringify</h3>
        <p>
        squares = {JSON.stringify(squares)} <br/>
        </p>
        </>
    );
}

export default JsonStringify;