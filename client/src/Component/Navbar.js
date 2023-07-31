import { NavLink ,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navmenu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
       < NavLink className="navbar-brand" to="/">React curd</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link" exact="true">About</NavLink>
            <NavLink to="/contact" className="nav-link" exact="true">Contact Us</NavLink>
          </Nav>
          <Link className='btn btn-outline-light' to="/user">Add User</Link>
        </Container>
      </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link"  exact="true" to="/">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact="true" to="/about">About</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link className='btn btn-outline-light' to="/user">Add User</Link>
    //   </div>
    // </nav>
  );
}

export default Navmenu;
