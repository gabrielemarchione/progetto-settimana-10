import { Row } from 'react-bootstrap';
import './App.css';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';

function App() {
  return (
    <Row
      className='vh-100 body-div text-white'
      data-bs-theme='dark'
    >
      <MyNav />
      <MyMain />
    </Row>

  );
}

export default App;
