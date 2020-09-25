import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar/Navbar';
import CreatePage from './components/CreatePage/CreatePage'

function App() {
  return (
    <div className="App">
      <Container >
        <Navbar />
        <CreatePage />
      </Container>
    </div>
  );
}

export default App;
