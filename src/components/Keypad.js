// Code Keypad Component Here

// function ChangeItUp(){
//     console.log("Entering password...")
// }

// function Keypad (){
//     return (
//         <div>
//             <input type="password" onChange={ChangeItUp} />
//         </div>
//     )
// }

function Keypad() {

    function handleChange() {
      console.log("Entering password...")
    }
  
    return (
      <input type="password" onChange={handleChange} />
    )
  }

export default Keypad;


