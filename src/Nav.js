import React from "react";
import {Link} from 'react-router-dom'
function Nav()
{
    return(
        <>
        <Link to='/'>Home Page</Link>
        <br />
        <Link to='/about'>About Page</Link>
        <br />
        {/* <a href="/about">About 2</a> */}
        </>
    )
}
export default Nav;