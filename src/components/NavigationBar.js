import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <NavLink to="/" className="links" activeclassname="active-link">
        <FontAwesomeIcon icon="bars" size="xl" color="#fff" />
      </NavLink>
      <NavLink to="/" className="links text-decoration-none" activeclassname="active-link">
        <Navbar.Brand to="/">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Stock Data
        </Navbar.Brand>
      </NavLink>
      <FontAwesomeIcon icon="user" size="xl" color="#fff" />
    </Container>
  </Navbar>
);

export default NavigationBar;
