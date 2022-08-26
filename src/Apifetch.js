import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';
import Apipost from "./Apipost";

function deleteRecord(id)
{
   fetch(`http://localhost:3004/posts/${id}`,
   {
    method:'DELETE'
   }).then((resp)=>
   {
        resp.json().then((rr)=>
        {
            console.log(rr)
        })
   })
}

function Apifetch()
{
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3004/posts").then((result)=>{
            result.json().then((resp)=>
            {
                console.log(resp[0])
                setData(resp)
            })
        })
    },[])

    return(
        <>
        <h1>API Get</h1>
        
        <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
            {
                data.map((item,i)=>
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td><button onClick={()=>deleteRecord(item.id)}>Delete</button></td>
                    </tr>
                )
            }
            </tbody>
            </Table>
            <Apipost />
        </>
    )
}
export default Apifetch;