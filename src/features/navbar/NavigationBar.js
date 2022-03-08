import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg';

const NavigationBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/stockPrice',
      text: 'Stock Price',
    },
    {
      id: 3,
      path: '/details',
      text: 'Details',
    },
  ];

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="links" activeclassname="active-link">
          <FontAwesomeIcon icon="bars" size="xl" color="#fff" />
        </NavLink>
        <NavLink to="/" className="links" activeclassname="active-link">
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
        {Links.map((link) => (
          <NavLink to={link.path} className="links" activeclassname="active-link" key={link.id}>
            {link.text}
          </NavLink>
        ))}
        <FontAwesomeIcon icon="user" size="xl" color="#fff" />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
