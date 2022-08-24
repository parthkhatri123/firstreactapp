import React from "react";

class Componentdidmount extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:"Parth"
        }
        console.log('constructor')
    }

    componentDidMount()
    {
        //Need to call API here
        console.log('Component Did Mount')
    }

    render()
    {
        console.log('Render')
        return(
            <div>
                <h1>Component Did Mount {this.state.data}</h1>
                <button onClick={()=>{this.setState({data:"Khatri"})}}>Update Data</button>
            </div>
        )
    }
}

export default Componentdidmount;