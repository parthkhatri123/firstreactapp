import React from "react";
class Componentdidupdate extends React.Component
{
    constructor()
    {
        console.log('Constructor')
        super();
        this.state={
            counter:0
        }
    }

    componentDidUpdate(prePros,preState,snapShot)
    {
        console.log('Component Did Update',preState)
    }

    shouldComponentUpdate()
    {
        return true;
    }

    render()
    {
        console.log('Render')
        return(
            <div>
                <h1>
                    Component Did {this.state.counter}
                </h1>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update Data</button>
            </div>
        )
    }
}

export default Componentdidupdate;