import React, { Component } from 'react';
import './App.css';
import Typed from 'react-typed';
import pyramid from './images/pyramid.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar">
        <row>
          <div class="col-4">
            <a class = "nav-link" href=".">
                <Typed 
                    strings={['[Character]']} 
                    typeSpeed={40} 
                    showCursor={false}
                    startDelay={15000}
                />
            </a>
            </div>
            <div class="col-4">
            <a class = "nav-link" href=".">
            <Typed 
                    strings={['[Arena]']} 
                    typeSpeed={40}
                    showCursor={false} 
                    startDelay={16000}
                />
            </a>
            </div>
            <div class="col-4">
            <a class = "nav-link" href=".">
            <Typed 
                    strings={['[Rankings]']} 
                    typeSpeed={40}
                    showCursor={false} 
                    startDelay={17000}
                />
            </a>
            </div>
        </row>
        </nav>
        </header>
        <div class = "main">
          <h1 className="title">
                <Typed 
                    strings={["Swords and Shields"]} 
                    typeSpeed={200}
                    startDelay={0}
                    showCursor={true} 
                />
                </h1>
          <img src={pyramid} className = 'pyramid' alt = 'pyramid'></img>
          <h2 class = "message">
                <Typed 
                    strings={['Welcome Adventurer, it is time to begin your journey!']} 
                    typeSpeed={75}
                    startDelay={6000}
                    showCursor={false} 
                />
          </h2>
          <a class = "nav-link" href=".">
            <Typed 
                    strings={['[Create A Character]']} 
                    typeSpeed={75}
                    showCursor={false} 
                    startDelay={12000}
            />
          </a>
        </div>

          

          
      </div>
    );
  }
}

export default App;
