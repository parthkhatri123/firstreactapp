import React , {createRef} from "react";

class LRef extends React.PureComponent
{
    constructor()
    {
        super();
        this.inputRef = createRef();
    }

    componentDidMount()
    {
        console.log(this.inputRef);
    }

    updateRef() {
        console.log(this.inputRef);
        this.inputRef.current.style.backgroundColor = 'black';
        this.inputRef.current.style.color = 'gold';
        this.inputRef.current.style.focus = true;
        this.inputRef.current.value = 'Parth Khatri';
    }

    render()
    {
        return(
            <>
            <h1>Ref In react</h1>
            <input type="text" ref={this.inputRef}/>
            <button onClick={()=>this.updateRef()}>Update Ref Props</button>
            </>
        )
    }
}

export default LRef;