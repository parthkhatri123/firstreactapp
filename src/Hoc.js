import React, { useState } from "react";

function Hoc()
{
    return(
        <>
        <h1>HOC</h1>
        <Hocblack cmp={Counter} />
        <Hocred cmp={Counter} />
        </>
    )
}

function Counter()
{
    const [count,setCount] = useState(0)
    return(
        <>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        </>
    )
}

// HOC COmponents
function Hocblack(props)
{
    return (
        <>
        <h2 style={{backgroundColor:"black",color:"white"}}>< props.cmp /></h2>
       
        </>
    )
}

function Hocred(props)
{
    return (
        <>
        <h2 style={{backgroundColor:"red",color:"black"}}>< props.cmp /></h2>
        </>
    )
}




export default Hoc;