import React from "react";
import {Table} from "react-bootstrap";

function Larray() {
    //const students = ['Parth', 'Shreya'];
    const students = [
        { name: "Parth", email: 'parth@test.com', contact: 111 },
        { name: "Shreya", email: 'Shreya@test.com', contact: 111 },
        { name: "Dhruil", email: 'Dhruil@test.com', contact: 111 }
    ]

    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
            {
                students.map((item,i) =>
                item.contact === 111 ?
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr> : null
                )
            }
        </tbody>
        </Table>
    )
}

export default Larray;