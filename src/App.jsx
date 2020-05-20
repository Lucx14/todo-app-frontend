import React from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import TodoCont from './containers/TodoApp/TodoApp';

const CONTENTWRAPPER = styled.div`
  margin: auto;
  width: 70%;
  border: 1px solid black;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <CONTENTWRAPPER>
        <TodoCont />
      </CONTENTWRAPPER>
      <Footer />
    </Wrapper>
  );
}

export default App;
