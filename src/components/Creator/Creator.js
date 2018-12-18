import React, { Component } from 'react';
import Typed from 'react-typed';

class Creator extends Component {
    render() {
        return (
            <h1>
                <Typed 
                    strings={["This is the Account and Character Creation Page, or at least the Account Page, And Then Creation Page!"]} 
                    typeSpeed={100}
                    startDelay={0}
                    showCursor={true} 
                />
            </h1>
        )
    }
}

export default Creator