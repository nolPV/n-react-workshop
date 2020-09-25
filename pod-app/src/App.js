import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import FooterMenu from './components/FooterMenu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CanvasContainer from './components/CreatePage/CanvasContainer'
import SideMenu from './components/CreatePage/SideMenu'

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Container className="mt-5">
        <Row>
          <Col sm={8}>
            <CanvasContainer />
          </Col>
          <Col sm={4} className="side-menu">
            <h2>300 THB</h2>
            <h4>Approximately</h4>
            <h4>US $10.00</h4>
            <SideMenu />
          </Col>
        </Row>
        <Row>
          <Col>
          <FooterMenu />
          </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
