import React from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import TodoApp from './components/TodoApp/TodoApp';
import TodoCont from './containers/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <TodoCont />
      <Footer />
    </div>
  );
}

export default App;
