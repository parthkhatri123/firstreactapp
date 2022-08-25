import { Button } from 'react-bootstrap';
import React from 'react';

function Users(props) {
  return (
      <>
          <tr>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
          </tr>
          <Button onClick={props.fnc}> Hello</Button>
      </>
  );
}

function CalculateRisk() {
  return (
    <div className="cal">
      <h2>This is second componenet in the same file</h2>
    </div>
  );
}

export default Users;
