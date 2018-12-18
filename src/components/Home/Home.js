import React, { Component } from 'react';
import pyramid from '../../images/pyramid.png'
import Typed from 'react-typed';
import { BrowserRouter as Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
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
                    strings={['Welcome Traveler, it is time to begin your journey!']} 
                    typeSpeed={75}
                    startDelay={6000}
                    showCursor={false} 
                />
          </h2>
          <Link class = "nav-link" to="/creator">
            <Typed 
                    strings={['[Create A Character]']} 
                    typeSpeed={75}
                    showCursor={false} 
                    startDelay={12000}
            />
          </Link>
        </div>
        )
    }
}

export default Home