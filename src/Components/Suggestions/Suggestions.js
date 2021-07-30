import React, { Component } from 'react'
import "./Suggestions.css";
import { Avatar } from '@material-ui/core';
import imageSrc1 from '../../images/pp1.png'
import imageSrc2 from '../../images/pp2.png'
import imageSrc3 from '../../images/pp3.jpeg'

class Suggestions extends Component {
    render() {
        return (
            <div>
                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions__body">
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc1} className="suggestions__image" />
                            <div className="suggestions__username">testing_profile</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc2} className="suggestions__image" />
                            <div className="suggestions__username">dummy_user</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc3} className="suggestions__image" />
                            <div className="suggestions__username">Panda</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc2} className="suggestions__image" />
                            <div className="suggestions__username">lalala</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc3} className="suggestions__image" />
                            <div className="suggestions__username">lala</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc1} className="suggestions__image" />
                            <div className="suggestions__username">pro</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Suggestions
