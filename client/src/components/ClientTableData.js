import React, { useEffect } from "react";

function ClientTableData(props) {
  useEffect(() => {}, [props.clients]);

  return props.clients.map((client) => {
    return (
      <tr key={client._id}>
        <th scope="row">{props.clients.indexOf(client) + 1}</th>
        <td>{client.added}</td>
        <td>{client.firstName}</td>
        <td>{client.lastName}</td>
        <td>
          {client.emergencyContact[0].name}: #
          {client.emergencyContact[0].number}
        </td>
      </tr>
    );
  });
}

export default ClientTableData;
