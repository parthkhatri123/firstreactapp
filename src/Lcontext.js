import React ,{useContext} from "react";
import {GlobalInfo} from './App';
import Lcontext2 from "./Lcontext2";

export default function Lcontext()
{
    const {Color} = useContext(GlobalInfo) 
    return(
        <>
        
        <h1 style={{color: Color}}>Child Context</h1>
        <Lcontext2 />
        </>
    )
}