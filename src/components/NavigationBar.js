import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { selectPageState, page } from '../redux/homeActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navitage = useNavigate();
  const currentPage = useSelector(selectPageState);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {currentPage === 'home' ? (
          <FontAwesomeIcon icon="bars" size="xl" color="#fff" />
        ) : (
          <button
            style={{ background: 'none', border: 'none' }}
            type="button"
            onClick={() => {
              dispatch(page('home'));
              navitage('/');
            }}
          >
            <img src="/arrow-left.svg" alt="back" style={{ width: '2em' }} />
          </button>
        )}
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
};

export default NavigationBar;
