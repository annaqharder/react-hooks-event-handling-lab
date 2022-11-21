// Code EyesOnMe Component Here

import React from "react";
// function focus(){
//     console.log("Good!")
// }

// function blur(){
//     console.log("Hey! Eyes on me!")
// }

// function EyesOnMe() {
//     return (
//         <button onFocus={focus} onBlur={blur}>Eyes on me</button>
//     )
// }

function EyesOnMe() {
    function handleFocus() {
      console.log("Good!");
    }
  
    function handleBlur() {
      console.log("Hey! Eyes on me!");
    }
  
    return (
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    );
  }

export default EyesOnMe