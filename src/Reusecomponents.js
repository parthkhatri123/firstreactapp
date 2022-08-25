import React from "react";
import Users from "./Users";
import { Table, Button } from 'react-bootstrap';


function clickme()
{
  alert('Clicked');
}

function Reusecomponents() {
    const students = [
        {
            name: "Parth", email: 'parth@test.com', address: [
                { Hn: '10', city: 'Abad', country: 'India' },
                { Hn: '15', city: 'Surat', country: 'India' },
                { Hn: '20', city: 'Vadodara', country: 'India' },
                { Hn: '34', city: 'Abad', country: 'India' }
            ]
        },
        {
            name: "Shreya", email: 'Shreya@test.com', address: [
                { Hn: '10', city: 'Abad', country: 'India' },
                { Hn: '15', city: 'Surat', country: 'India' },
                { Hn: '20', city: 'Vadodara', country: 'India' },
                { Hn: '34', city: 'Abad', country: 'India' }
            ]
        },
        {
            name: "Dhruil", email: 'Dhruil@test.com', address: [
                { Hn: '10', city: 'Abad', country: 'India' },
                { Hn: '15', city: 'Surat', country: 'India' },
                { Hn: '20', city: 'Vadodara', country: 'India' },
                { Hn: '34', city: 'Abad', country: 'India' }
            ]
        },
        {
            name: "Jainam", email: 'Jainam@test.com', address: [
                { Hn: '10', city: 'Abad', country: 'India' },
                { Hn: '15', city: 'Surat', country: 'India' },
                { Hn: '20', city: 'Vadodara', country: 'India' },
                { Hn: '34', city: 'Abad', country: 'India' }
            ]
        }
    ]

    return (
        <>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, i) =>
                            <Users data={item} fnc={clickme} />
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Reusecomponents;