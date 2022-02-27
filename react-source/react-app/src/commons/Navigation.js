import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css';

function Navigation(){
    return (<ul id="navigation-list" className="nav flex-column">
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>
  </ul>);
}

export default Navigation;