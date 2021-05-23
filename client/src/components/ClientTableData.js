import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function ClientTableData(props) {
  const [clients, setClients] = useState([])

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getDatabase()
  }, []);

  const getDatabase = async () => {
    try {
      const token = getAccessTokenSilently();
      const response = await fetch(
        `/clients/view`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      )
      const responseData = response.json()
      console.log(responseData)
    } catch (error) {

    }
  }

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
