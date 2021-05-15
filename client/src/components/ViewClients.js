import { useEffect, useState } from 'react'
import axios from "axios"

export default function ViewClients() {

    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        getClients()
    }, [])

    const getClients = () => {
        console.log(`getting clients`)
    }

    return (
        <h1 className="clients">viewing clients</h1>
    )
}