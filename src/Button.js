import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {

        return ( 
        <div className="form-wrapper">
            <button className="btn" type="submit">Show text input</button>
        </div>
        );
    }
}

export default Button;