import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './components/Title';
import NewTask from './components/NewTask';

const App = () => {
  return (
    <>
      <Container style={{ width: "60%" }}>
        <Row>
          <Title />
        </Row>
        <Row>
          <NewTask />
        </Row>
        <Row>
          
        </Row>
      </Container>
    </>
  );
};

export default App;
