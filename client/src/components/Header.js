import LoginButton from "./Login";
import LogoutButton from "./Logout";

export default function Header() {
  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <span className="navbar-brand mb-0 h1">GCAS v0.1</span>
            <LoginButton />
            <LogoutButton />
        </nav>
      </header>
    </div>
  );
}
