function Users() {
    return (
      <div className="Users">
       <h1>This is user main component</h1>
       <CalculateRisk />
      </div>
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
  