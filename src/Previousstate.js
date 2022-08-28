import React, { useState } from "react";

function Previousstate()
{
    const [data,setData]=useState('0')

    function updateCount()
    {
        setData((prev)=>
        {
            
            console.log(prev)
            return Math.floor(Math.random() * 50)
        })
    }

    return(
        <>
        <h1>Count : {data}</h1>
        <button onClick={updateCount}>Update Count</button>
        </>
    )


}
export default Previousstate;