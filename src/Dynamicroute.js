import React from "react";
import { Route, Link , Routes } from 'react-router-dom';
import Dynamicpages from "./Dynamicpage";

function Dynamicroute()
{
    let users = [
        { id: '1', name: 'Parth', enail: 'parth@test.com', contact: '000' },
        { id: '2', name: 'Dhrumil', enail: 'parth@test.com', contact: '000' },
        { id: '3', name: 'Jainam', enail: 'parth@test.com', contact: '000' },
        { id: '4', name: 'Shreya', enail: 'parth@test.com', contact: '000' },
        { id: '5', name: 'Princy', enail: 'parth@test.com', contact: '000' },
        // {id:'6',name:'Nirav',enail:'parth@test.com',contact:'000'},
        // {id:'7',name:'Chenda',enail:'parth@test.com',contact:'000'}
    ]
    return(
        <div>
            <h1>Dynamic Route</h1>
            {
                users.map((item,i) =>
                    <div key={i}>
                        <Link to={'/dynamicpage/' + item.id}>{item.name}</Link>
                    </div>
                )
            }
            <Routes>
            <Route path="/dynamicpage/:id" ></Route>
            </Routes>
        </div>
    )
}

export default Dynamicroute;