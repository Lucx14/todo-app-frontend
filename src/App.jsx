import React from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import TodoCont from './containers/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoCont />
      <Footer />
    </div>
  );
}

export default App;
