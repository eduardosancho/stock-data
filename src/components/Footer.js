import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBContainer, MDBFooter,
} from 'mdbreact';
import SearchForm from './SearchForm';
import '../styles/Footer.css';

const Footer = () => (
  <MDBFooter color="blue" className="font-small fixed-bottom">
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        <SearchForm />
      </MDBContainer>
    </div>
  </MDBFooter>
);

export default Footer;
