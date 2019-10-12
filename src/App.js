import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist'
import Tasks from './Tasks'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Todolist} />
        <Route path='/task/:index' component={Tasks} />

      </BrowserRouter>
    )
  }
}

export default App;
