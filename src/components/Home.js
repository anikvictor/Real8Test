import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Videocall from './videocall.js'
import { Button } from 'react-bootstrap'
import Login from './Login.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            showPopup: false,
            showVideo: false
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    render() {
        return (
            <div>
                <section id="home" className="video-hero videohero1" data-section="home">
                    <div className="overlay"></div>
                    <div className="display-t text-center">
                        <div className="container">
                            <div className="col-md-12 col-md-offset-0">
                                <div className="animate-box">
                                    <h2 className="textonimg">
                                        {
                                            localStorage.getItem("login") ?
                                                "Hi " + localStorage.getItem("name") : ""
                                        }
                                        <br />
                                        Relate with love
                                        </h2>
                                    <p className="textonimg1">Our purpose is to help adults build intimacy that embodies love's most profound qualities throughout all stages of life</p>
                                    {
                                        localStorage.getItem("login") ?
                                            // <Videocall/>
                                            <div>
                                                {
                                                    this.state.showVideo ?
                                                        <Videocall />
                                                        : <div className="receiverDiv">
                                                            <div className="innerDiv">
                                                                <Button variant="outline-light" onClick={() =>  this.setState({ showVideo: true })}>Connect</Button>
                                                            </div>
                                                        </div>
                                                }

                                            </div>
                                            :
                                            <div className="receiverDiv">
                                                <div className="innerDiv">
                                                    <Button variant="outline-light" onClick={this.togglePopup.bind(this)}>Connect</Button>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {
                    this.state.showPopup ?
                        <Login closePopup={this.togglePopup.bind(this)} term={"home"} />
                        : null
                }

                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
        );
    }
}

export default Home;