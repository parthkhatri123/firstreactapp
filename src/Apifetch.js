import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';
import Apipost from "./Apipost";


function Apifetch()
{
    const [data,setData]= useState([])
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('') 
    const [id,setId]=useState(null) 

    useEffect(()=>{
        getList()
    },[])

    function getList()
    {
        fetch("http://localhost:3004/posts").then((result)=>
        {
            result.json().then((resp)=>
            {
                console.log(resp[0])
                setData(resp)
                setAuthor(resp[0].author)
                setTitle(resp[0].title)
                setId(resp[0].id)
            })
        })
    }
  
    function deleteRecord(id)
    {
        fetch(`http://localhost:3004/posts/${id}`,
        {
            method:'DELETE'
        }).then((resp)=>
        {
                resp.json().then((rr)=>
                {
                    getList()
                })
        })
    }

    function selectUser(id)
    {
        let ddd = data[id-1];
        setAuthor(ddd.author)
        setTitle(ddd.title)
        setId(ddd.id)
    }

    function updateUser()
    {
        let item = {author,title,id}
        fetch(`http://localhost:3004/posts/${id}`,
        {
            method:'PUT',
            headers:
            {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
            },
            body:JSON.stringify(item)
        }).then((resp)=>
        {
                resp.json().then((rr)=>
                {
                    getList()
                })
        })
    }

    return(
        <>
        <h1>API Get</h1>
        
        <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th colSpan="2">Operations</th>
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
                        <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
                    </tr>
                )
            }
            </tbody>
            </Table>
            <h1>Update Data Form</h1><br></br>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}></input><br></br><br></br>
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br><br></br>
            {/* <input type="text"  value={id} onChange={(e)=>setId(e.target.value)}></input><br></br><br></br> */}
            <button onClick={updateUser}>Update</button>

            <Apipost list={getList}/>
        </>
    )
}
export default Apifetch;