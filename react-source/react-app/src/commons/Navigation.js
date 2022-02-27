import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css';
import {
    Link
  } from "react-router-dom";


function Navigation(){
    return (<ul id="navigation-list" className="nav flex-column">
    <li className="nav-item">
      <Link className="nav-link" to="/">About</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/portfolio">Portfolio</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
    </li>
  </ul>);
}

export default Navigation;