import React, {useEffect} from "react";

function ClientTable(props) {

  useEffect(() => {
  }, [])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Pic</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;