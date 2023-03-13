import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewTask = ({ onNewTask }) => {
  const [enteredText, setEnteredText] = useState("");

  return (
    <>
      <Form.Label>Create new task</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Task name" value={enteredText} onChange={(e) => setEnteredText(e.target.value)} />
        <Button
          disabled={(enteredText.trim().length > 0) ? false : true}
          onClick={() => {
            onNewTask(enteredText);
            setEnteredText("");
          }}>
          Add Task
        </Button>
      </InputGroup>
    </>
  );
};

export default NewTask;