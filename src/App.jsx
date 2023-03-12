import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from './components/Title';
import NewTask from './components/NewTask';

const App = () => {
  return (
    <>
      <Container>
        <Row style={{ width: "70%" }} className="mx-auto">
          <Title />
        </Row>
        <Row style={{ width: "70%" }} className="mx-auto">
          <NewTask />
        </Row>
        <Row>
          
        </Row>
      </Container>
    </>
  );
};

export default App;
