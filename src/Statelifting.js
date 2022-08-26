import React from "react";
function Statelifting(props)
{
    const a = {name:'Parth',email:'parth@test.com'}
    return(
        <>
        <h1>Lifting State Up</h1>
        <button onClick={()=>props.data(a)}>Click Me</button>
        </>
    )
}
export default Statelifting;