import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <>
        <h1 className="mainmenu">Main Menu</h1>
        <p>
            <Link to="/clients"><button className="btn-lg">Clients</button></Link><br/>
            <button className="btn-lg">Policies/Procedures</button><br/>
            <button className="btn-lg">Employees</button>
        </p>
        </>
    )
}