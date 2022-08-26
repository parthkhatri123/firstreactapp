import React ,{useRef} from "react";

function Luncontrolled() {

    const inputRef = useRef()
    const itemRef = useRef()

    function submitData(e)
    {
        e.preventDefault();
        const val1 = inputRef.current.value;
        const val2 = itemRef.current.value;
        alert(val1)
        alert(val2)
        const val3 = document.getElementById('input3').value
        alert(val3)
    }

    return (
        <>
            <h1>Uncontrolled Componenet</h1>
            <form onSubmit={submitData}>
                <input type="text" ref={inputRef} /><br /><br />
                <input type="text" ref={itemRef} /><br /><br />
                <input id="input3" type="text" /><br /><br />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}

export default Luncontrolled;