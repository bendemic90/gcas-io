import { Client } from "../../../models/Client"

export default function ViewClients() {
    const hitClients = async () => {
        try {
            const clients = await Client.find({})
            console.log(clients)
        } catch (err) {
            res.json(err)
        }
    }

    return (
        <h1 className="clients">viewing clients</h1>
    )
}