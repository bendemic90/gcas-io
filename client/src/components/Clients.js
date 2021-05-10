import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

const Clients = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="clients">Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="clients">
                <h2>client info</h2>
            </div>
        )
    )
}

export default Clients;