import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Clients = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="clients">Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="clients">
                <h2>Clients</h2>
                <Link to="/clients/view"><button className="btn-lg">View Clients</button><br/></Link>
                <Link to="/clients/add"><button className="btn-lg">Add a new Client</button><br/></Link>
                <button className="btn-lg">Update a Client</button><br/>
                <button className="btn-lg">Delete a Client</button><br/>
                <button className="btn-lg">Notes/Comments</button>
            </div>
        )
    )
}

export default Clients;