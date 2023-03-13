import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Task from './Task';
import './TaskList.css'


const TaskList = ({ sectionName, tasks, show, completed, onClickCheckBox, onClickDelete, onEditTask }) => {
  return (
    <>
      <Form.Label className="mt-4 fw-bold">{sectionName} ({tasks.length})</Form.Label>
      {
        (tasks.length > 0 && show) ?
          <Card style={{ width: "100%" }} className="task-list" >
            {tasks.map((task) => <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={completed}
              onClickCheckBox={onClickCheckBox}
              onClickDelete={onClickDelete}
              onEditTask={onEditTask}
            />)}
          </Card> : <></>
      }
    </>
  );
};
export default TaskList;