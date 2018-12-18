import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>  
      <Home/>
      </div>
    );
  }
}

export default App;
