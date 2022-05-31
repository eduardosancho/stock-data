import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCurrentStock,
} from '../redux/homeActions';
import apikey from '../apiKey';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [company, setCompany] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/${company}?apikey=${apikey}`));
  };

  return (
    <Form onSubmit={submitSearch} className="d-flex flex-column border-1 mx-auto w-100 justify-content-center gap-2">
      <Form.Label>
        Search for a specific company
        <br />
        Use NSE Abbreviation:
        {'\n'}
        <em>Apple =&gt; AAPL</em>
      </Form.Label>
      <Form.Group controlId="formCompanyName" className="d-flex justify-content-center gap-3">
        <Form.Control
          type="text"
          placeholder="Amazon => AMZN"
          className="py-2 w-50"
          value={company}
          onChange={({ target }) => {
            setCompany(target.value);
          }}
        />
        <Button type="submit" className="align-self-center">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
