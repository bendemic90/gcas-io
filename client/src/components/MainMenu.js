import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <>
        <h1 className="mainmenu">Main Menu</h1>
        <p>
            <Link to="/clients"><button className="btn-lg">Clients</button></Link>
        </p>
        </>
    )
}