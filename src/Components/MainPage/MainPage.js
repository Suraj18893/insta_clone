import React, { Component } from 'react'
import Post from '../Post/Post';
import "./MainPage.css";
import uploadImage from "../../images/upload.png";

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        let data = [
            {
                "postId": "123456",
                "userName": "Suraj",
                "postImageURL": "https://source.unsplash.com/random",
                "timeStamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "Pro",
                "postImageURL": "https://source.unsplash.com/random",
                "timeStamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "Panda",
                "postImageURL": "https://source.unsplash.com/random",
                "timeStamp": "12345",
                "likes": "1234"
            }
        ]
        this.setState({ postArray: data })
    }



    render() {
        return (

            <div>
                <div className="fileupload" style={{"textAlign":"center", "margin":"10px"}}>

                    <img className="mainpage__uploadicon" src={uploadImage} />

                </div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post key={index} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }

            </div>
        )
    }
}

export default MainPage
