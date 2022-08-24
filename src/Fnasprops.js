import React from "react";

function Fnasprops(props)
{
    return(
        <div>
            <h1>Pass function as props</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}

export default Fnasprops;