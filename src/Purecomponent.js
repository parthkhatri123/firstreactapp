import React from "react";
class Purecomponents extends React.PureComponent
{
    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render(props)
    {
        console.log('ReRender');
        return(
            <>
            <h1>Pure Component  {this.props.count}</h1>
            {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update State</button> */}
            </>
        )
    }
}

export default Purecomponents;