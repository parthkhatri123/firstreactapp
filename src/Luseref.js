import React , {useRef , forwardRef} from "react";

function Luseref(props,ref)
{
    const inputRef = useRef(null)
    

    function fnc()
    {
        inputRef.current.value = '1000'
        inputRef.current.focus()
    }

    

    return(
        <>
        <h1>Use Ref in React</h1>
        <input type="text" ref={inputRef} /><br></br><br></br>
        <button onClick={fnc}>Update DOM using Ref</button><br></br><br></br>
        <h1>Forward Ref Example</h1>
        <input type="text" ref={ref}></input>
        </>
    )
}

export default forwardRef(Luseref);