import React, {useEffect} from "react";
import ClientTableData from "./ClientTableData";

function ClientTable(props) {

  useEffect(() => {
  }, [])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Added</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Emergency Contact</th>
          </tr>
        </thead>
        <tbody>
          <ClientTableData clients={props.clients}/>
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;