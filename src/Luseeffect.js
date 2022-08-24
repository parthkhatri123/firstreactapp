import React from "react";
import { useState, useEffect } from "react";

function Luseeffect(props) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('Parth')
    },[count])

    useEffect(() => {
        console.log('Khatri')
    },[count2])

    useEffect(() => {
        console.log('Props Called')
    },[props.name])

    return (
        <div>
            <h1>Count {count} </h1>
            <h1>Count2 {count2} </h1>
            <h1>Props : {props.name}</h1>
            
            <button onClick={() => setCount(count + 1)}>Increment Counter 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment Counter 2</button>
        </div>
    )
}

export default Luseeffect;