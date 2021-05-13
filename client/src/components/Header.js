import LoginButton from "./Login";
import LogoutButton from "./Logout";
import TakeMeHome from "./TakeMeHome";
import { useAuth0 } from "@auth0/auth0-react"

export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <span className="navbar-brand mb-0 h1">GCAS v0.1</span>
            <TakeMeHome />
            {!user ? (<LoginButton />) :
            (<LogoutButton />)}
        </nav>
      </header>
    </div>
  );
}
