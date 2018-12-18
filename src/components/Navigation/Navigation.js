import React, { Component } from 'react';
import Typed from 'react-typed';

class Navigation extends Component {
    render(){
        return (
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
        )
    }
}

export default Navigation