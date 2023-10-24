import React from "react";

function FunctionParanthesisAndParameters(){

  //Optional parenthesis if the parameter is ONE single element
  const square = a => a * a;
  const plusOne = a => a +1;

  const twoSquared = square(2);
  const threePlusOne = plusOne(3);



  return(
      <>
      <h3>Parenthesis and Parameters</h3>
      <p>twoSquared = {twoSquared}</p>
      <p>square(2) = {square(2)}</p>
      <p>threePlusOne = {threePlusOne}</p>
      <p>plusOne = {plusOne(3)}</p>

      </>
  );
}

export default FunctionParanthesisAndParameters;