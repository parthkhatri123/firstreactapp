
function Dynamicpage(props)
{
    console.log(props.match.params.id)
    return(
        <div>
            <h1>Dynamic Page {props.match.params.id}</h1>
        </div>
    )
}

export default Dynamicpage; 