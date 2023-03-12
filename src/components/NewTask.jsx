import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewTask = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNewTask">
        <Form.Label>Create new Task</Form.Label>
        <br />
        <Form.Control type="text" placeholder="Task name" style={{ display: "inline", maxWidth: "80%", verticalAlign: "middle" }} />
        <Button variant="primary" type="submit" style={{ display: "inline", marginLeft: "1rem" }}>
          Add task
        </Button>

      </Form.Group>


    </Form>
  );
};

export default NewTask;