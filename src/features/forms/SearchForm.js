import Form from 'react-bootstrap/Form';

const SearchForm = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 2000; i <= currentYear; i += 1) {
    years.push(i);
  }

  return (
    <Form className="d-flex border-1 mx-auto w-100 justify-content-center">
      <Form.Group controlId="formCompanyName">
        <Form.Label>
          Search for a specific company
          <br />
          Use NSE Abbreviation:
          {'\n'}
          <em>Apple =&gt; AAPL</em>
        </Form.Label>
        <Form.Control type="text" placeholder="Amazon => AMZN" className="py-2" />
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
