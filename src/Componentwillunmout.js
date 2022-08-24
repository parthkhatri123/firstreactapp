import React from "react";
class Componentwillunmount extends React.Component {
    constructor() {
        super();
        
    }

    componentWillUnmount() {
        alert('Unmounted')
    }

    render() {
        return (
            <div>
                <h1>This is Component will unmount Rendered</h1>
            </div>
        )
    }
}

export default Componentwillunmount;