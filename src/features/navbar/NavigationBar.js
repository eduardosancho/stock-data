import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar = () => {
  const exclamation = '!';

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <FontAwesomeIcon icon="bars" size="xl" color="#fff" />
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Stock Data
        </Navbar.Brand>
        <FontAwesomeIcon icon="user" size="xl" color="#fff" />
      </Container>
    </Navbar>
  )
}

export default NavigationBar;