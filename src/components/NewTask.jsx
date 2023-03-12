import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewTask = () => {
  return (
    <>
      <Form.Label>Create new task</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Task name" />
        <Button>
          Add Task
        </Button>
      </InputGroup>
    </>
  );
};

export default NewTask;