import React, { useState } from "react";

function Lcontrolled()
{
    const [val,setVal]=useState("Parth")
    return(
        <>
        <h1>Controlled Component</h1>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
        </>
    )
}

export default Lcontrolled;