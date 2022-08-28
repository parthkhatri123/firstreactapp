import React ,{useContext} from "react";
import {GlobalInfo} from './App';

export default function Lcontext3()
{
    const {Color,getDay} = useContext(GlobalInfo) 
    const day='Sunday';

    return(
        <>
        <h1 style={{color: Color}}>Other Child Context</h1>
        <button onClick={()=>getDay(day)}>Click Me</button>
        </>
    )
}