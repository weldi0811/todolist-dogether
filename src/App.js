import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Todolist} />

      </BrowserRouter>
    )
  }
}

export default App;
