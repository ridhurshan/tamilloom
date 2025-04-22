import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="text1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text2">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;
