import { NavLink } from 'react-router-dom';
import blogLogo from '../assets/218961275.jpg'


function Header() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li><img className="blog-logo" src={blogLogo} alt="" /></li>
          <li><NavLink to="/">HomePage</NavLink></li>
          <li>Login</li>
          <li>Register</li>
          <li>Logout</li>
        </ul>
      </nav>
      <h1> Bienvenue sur mon blog </h1>  </>
  );
}

export default Header;