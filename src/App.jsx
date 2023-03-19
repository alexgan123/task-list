import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './components/Title';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import secrets from '../cools/secrets.json';


const App = () => {
  console.log("Testing: " + secrets.name);
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: uuidv4(),
      name: taskName,
    };
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };

  const addCompletedTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => {
      if (task.id === taskId) {
        setCompletedTasks((prev) => [task, ...prev]);
      }
      return task.id !== taskId;
    }))
  };

  const removeCompletedTask = (taskId) => {
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => {
      if (task.id === taskId) {
        setTasks((prev) => [task, ...prev]);
      }
      return task.id !== taskId;
    }))
  };

  // This function can delete tasks from both the task list and the completed list
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // This function can rename tasks from both the task list and the completed list
  const renameTask = (taskId, newName) => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === taskId) return { ...task, name: newName };
      else return task;
    }));
    setCompletedTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === taskId) return { ...task, name: newName };
      else return task;
    }));
  };

  return (
    <>
      <Container style={{ width: "60%" }}>
        <Row>
          <Title />
        </Row>
        <Row>
          <NewTask onNewTask={addTask} />
        </Row>
        <Row>
          <TaskList
            tasks={tasks}
            onClickCheckBox={addCompletedTask}
            onClickDelete={deleteTask}
            onEditTask={renameTask}
            sectionName="To Do"
            show={true}
            completed={false} />
        </Row>
        <Row>
          <TaskList
            tasks={completedTasks}
            onClickCheckBox={removeCompletedTask}
            onClickDelete={deleteTask}
            sectionName="Completed"
            show={true}
            completed={true} />
        </Row>
      </Container>
    </>
  );
};

export default App;
