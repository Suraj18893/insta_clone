import React, { Component } from 'react'
import './Login.css';

class Sign extends Component {
    render() {
        return (
            <div>
                <input className="logipage__text" type="text" placeholder="Phone number, username, or email" />
                <input className="logipage__text" type="password" placeholder="Password" />
                <button className="login__button">Log In</button>

            </div>
        )
    }
}

export default Sign
