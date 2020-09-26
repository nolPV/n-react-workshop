import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import FooterMenu from './components/FooterMenu'
import CreatePage from './components/CreatePage/CreatePage'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <MenuBar />
      <CreatePage />
      <Row>
        <Col>
          <FooterMenu />
        </Col>
      </Row>
    </div>
  );
}

export default App;
