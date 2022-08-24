function Student(props) {
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h2>Hello {props.name}</h2>
            <h3>Email : {props.email}</h3>
            <h4>Address : {props.other.address}</h4>
            <h4>Mobile : {props.other.mobile}</h4>
        </div>
    )
}

export default Student;