import { useEffect, useState } from 'react'
import ClientTable from './ClientTable'

export default function ViewClients() {

    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        getClients()
    }, [])

    const getClients = async () => {
        await fetch('/clients/view', {
            mode: 'no-cors'
        })
        .then(response => response.json())
        .then(data => setClientList(data))
    }

    return (
        <>
        <h1 className="clients">Your Clients</h1>
        <ClientTable />
        </>
    )
}