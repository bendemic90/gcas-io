import { IoIosBuild, IoLogoGithub } from 'react-icons/io';

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <nav className="navbar">
          <span className="navbar-brand built-by mb-0 h1">
            <IoIosBuild size={35}/> by <a href="https://github.com/bendemic90" target="_blank" rel="noopener noreferrer"><IoLogoGithub size={35}/></a>
          </span>
        </nav>
      </footer>
    </div>
  );
}
