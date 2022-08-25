import React from "react";
import {Table} from "react-bootstrap";

function Lnestedlist() {
    const students = [
        { name: "Parth", email: 'parth@test.com', address: [
            {Hn:'10',city:'Abad',country:'India'},
            {Hn:'15',city:'Surat',country:'India'},
            {Hn:'20',city:'Vadodara',country:'India'},
            {Hn:'34',city:'Abad',country:'India'}
        ] },
        { name: "Shreya", email: 'Shreya@test.com', address: [
            {Hn:'10',city:'Abad',country:'India'},
            {Hn:'15',city:'Surat',country:'India'},
            {Hn:'20',city:'Vadodara',country:'India'},
            {Hn:'34',city:'Abad',country:'India'}
        ] },
        { name: "Dhruil", email: 'Dhruil@test.com', address: [
            {Hn:'10',city:'Abad',country:'India'},
            {Hn:'15',city:'Surat',country:'India'},
            {Hn:'20',city:'Vadodara',country:'India'},
            {Hn:'34',city:'Abad',country:'India'}
        ] },
        { name: "Jainam", email: 'Jainam@test.com', address: [
            {Hn:'10',city:'Abad',country:'India'},
            {Hn:'15',city:'Surat',country:'India'},
            {Hn:'20',city:'Vadodara',country:'India'},
            {Hn:'34',city:'Abad',country:'India'}
        ] }
    ]

    return (
        <div>
        <h1>Nested List</h1>

        <Table striped variant="dark">
        <thead>
            <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((item,i)=>
                <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                <Table striped bordered variant="dark">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>House Number</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    item.address.map((data,l)=>
                    <tr key={l}>
                    <td>{l+1}</td>
                    <td>{data.Hn}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                    </tr>
                    )
                }</tbody></Table></td>
                </tr>
                )
            }
        </tbody>
        </Table>
        </div>

    )
}

export default Lnestedlist;