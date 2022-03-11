import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 2000; i <= currentYear; i += 1) {
    years.push(i);
  }

  return (
    <Form className="d-flex flex-column border-1 mx-auto w-100 justify-content-center gap-2">
      <Form.Label>
        Search for a specific company
        <br />
        Use NSE Abbreviation:
        {'\n'}
        <em>Apple =&gt; AAPL</em>
      </Form.Label>
      <Form.Group controlId="formCompanyName" className="d-flex justify-content-center gap-3">
        <Form.Control type="text" placeholder="Amazon => AMZN" className="py-2 w-50" />
        <Button type="submit" className="align-self-center">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
