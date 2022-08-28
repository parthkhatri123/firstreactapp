import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';

function Apipost(props)
{
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('') 

    function savePost()
    {
       let formData = {title,author}
       fetch("http://localhost:3004/posts",
       {
        method:'POST',
        headers:
        {
            'Accept' : 'application/json',
            'Content-type' : 'application/json',
        },
        body:JSON.stringify(formData)
       }).then((r)=>
       {
            r.json().then((rrr)=>
            {
            //    {props.list}
            })
       })
      
    }

    return(
        <>
        <h1>Post Data</h1>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title"/><br></br><br></br>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} name="author"/><br></br><br></br>
        <button onClick={savePost}>Save New Post</button>
        </>
    )
}

export default Apipost;