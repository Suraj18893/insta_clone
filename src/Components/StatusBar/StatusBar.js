import React, { Component } from 'react'
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/pp1.png";
import uploadimage from "../../images/statusadd.png";

class StatusBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [{
            "username": "suraj",
            "imageURL": "https://darresne.com/img/female-avatar.png",
            "id": "1",
        },
        {
            "username": "abcs",
            "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
            "id": "2",
        },
        {
            "username": "qwe",
            "imageURL": "https://www.w3schools.com/w3css/img_avatar3.png",
            "id": "3",
        },
        {
            "username": "jyscscjj",
            "imageURL": "https://darresne.com/img/female-avatar.png",
            "id": "4",
        },
        {
            "username": "sc",
            "imageURL": "https://www.w3schools.com/w3css/img_avatar3.png",
            "id": "5",
        },
        {
            "username": "jyscsscsjj",
            "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGonDgYzVXUcaKSWbvyH_ICVD23aI4zlRMJQ&usqp=CAU",
            "id": "6",
        },
        {
            "username": "jyaxjj",
            "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU",
            "id": "7",
        },
        {
            "username": "jyyjjj",
            "imageURL": "../../images/pp1.png",
            "id": "8",
        }
        ]

        this.setState({ statusList: data })

    }

    render() {
        return (
            <div>
                <div className="statusbar__container">

                    {
                        this.state.statusList.map((item) => (
                            <div className="status">
                                <Avatar key={item.id} className="statusbar__status" src={item.imageURL} />
                                <div key={item.username} className="statusbar__text">{item.username}</div>

                            </div>

                        ))
                    }


                </div>
            </div>
        )
    }
}

export default StatusBar
