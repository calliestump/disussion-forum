import React from "react";
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import PostList from './PostList.js';
import PostControl from './PostControl.js';

function App() {
  return (
    <>
      <Header/>
      <Container>
        <PostControl/>
      </Container>
    </>
  );
}

export default App;