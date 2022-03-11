import Form from 'react-bootstrap/Form';

const DateForm = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 2000; i <= currentYear; i += 1) {
    years.push(i);
  }

  return (
    <Form className="d-flex border-1 mx-auto w-100 justify-content-center">
      <Form.Group controlId="formCompanyName">
        <Form.Label>NSE Abbreviation</Form.Label>
        <Form.Control type="text" placeholder="Amazon => AMZN" className="py-2" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Filter Year</Form.Label>
        <Form.Select aria-label="Default select example" size="sm" className="mh-25 py-2" style={{ fontSize: '1rem' }}>
          {years.reverse().map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default DateForm;
