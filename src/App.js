import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'; 


export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
