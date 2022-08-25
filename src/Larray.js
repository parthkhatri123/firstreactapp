import React from "react";

function Larray() {
    //const students = ['Parth', 'Shreya'];
    const students = [
        { name: "Parth", email: 'parth@test.com', contact: 888 },
        { name: "Shreya", email: 'Shreya@test.com', contact: 111 },
        { name: "Dhruil", email: 'Dhruil@test.com', contact: 222 }
    ]

    return (
        <table border="1">
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
            {
                students.map((item) =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>
                )
            }

        </table>
    )
}

export default Larray;