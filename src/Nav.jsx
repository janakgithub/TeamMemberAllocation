import {Link} from 'react-router-dom'

const Nav = () =>{
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/teamMembers">Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      </ul>
    </div>
    </nav>
    )
}

export default Nav;