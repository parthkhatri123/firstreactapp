import React, { useState } from "react";

function Profile() {
    const [loggedin, setLoggedin] = useState(false)
    const [conditional, setCondition] = useState(1)
    //var conditional = 3

    return (
        <div>
            {loggedin ? <div><h1>Welcome Parth</h1><button onClick={() => setLoggedin(false)}>Logout</button></div> : <div><h1>Welcome Guest</h1><button onClick={() => setLoggedin(true)}>Login</button></div>}
            {conditional == 1 ? 
            <h1>Welcome User 1</h1> 
            : conditional == 2 ? <h1>Welcome User 2</h1> 
            : <h1>Welcome User 3</h1>}
        </div>
    )
}

export default Profile;