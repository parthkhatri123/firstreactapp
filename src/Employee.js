import React from "react";
class Employee extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:1
        }

    }

    apple() {
        this.setState({data:this.state.data+1})
    }

    render()
    {
        return(
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple()}>Update  Data</button>
            </div>
        )
    }
}

export default Employee;