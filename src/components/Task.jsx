import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { BsTrashFill } from 'react-icons/bs';

const Task = ({ id, name, completed, onClickCheckBox, onClickDelete, onEditTask }) => {
  return (
    <InputGroup>
      <InputGroup.Checkbox
        style={{ cursor: "pointer", marginTop: "0rem" }}
        checked={completed}
        onChange={() => onClickCheckBox(id)} />
      <Form.Control value={name} onChange={(e) => onEditTask(id, e.target.value)} disabled={completed} />
      <Button variant="danger" onClick={() => onClickDelete(id)}>
        <BsTrashFill style={{ marginTop: "-0.25rem" }} />
      </Button>
    </InputGroup>
  );
};
export default Task;