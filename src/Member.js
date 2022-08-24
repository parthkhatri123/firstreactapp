import React from "react";
class Member extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "skyblue" }}>
                <h1>Name : {this.props.name}</h1>
                <h2>Email : {this.props.email}</h2>
            </div>
        )
    }

}

export default Member;