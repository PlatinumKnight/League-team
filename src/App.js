import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import StylePrueba from './layouts/StyleButton';
import StyleImagen from './layouts/StyleImagen';
import StyleButton from './layouts/StyleButton';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <StyleImagen/>
        <StyleButton/>
       
       
   
      </div>
    )
  }
}

export default App
