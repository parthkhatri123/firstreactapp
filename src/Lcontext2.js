import React ,{useContext} from "react";
import {GlobalInfo} from './App';

export default function Lcontext2()
{
    const {Color} = useContext(GlobalInfo) 
    return(
        <>
        <h1 style={{color: Color}}>Super Child Context</h1>
        </>
    )
}