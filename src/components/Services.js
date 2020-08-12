import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="container">
                               <div className="container">
                    <h1>How do I start?</h1><br />
                    <div>
                        <ul>
                            <li>Create an account and Sign In.</li>
                            <li>Commit to giving each person you connect with, 1 minute of your time.</li>
                            <li>Press the Connect button. When another person is ready, you will be paired and you will start an experience together.</li>
                            <li>If there is no one else ready to connect at this time, you can activate notifications, or join one of our gatherings.</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1>How does the experience work?</h1><br />
                    <div>
                        <ul>
                            <li>You will be asked to allow access to your camera. When you hit “allow”, you will start seeing your own video.</li>
                            <li>You will see a silhouette on top of your video. Please position yourself according to the silhouette. Having your eyes closer to your web camera helps to have an experience of “eye contact” with the other person, generally this is achieved by positioning your head close to the top of the screen.</li>
                            <li>When you are ready, press “Start”. At this point the website will become fullscreen, so you can immerse yourself in the experience. When both you and the other person are ready, the video connection will start between you.</li>
                            <li>The connection will end automatically after one minute. There is a progress bar at the top of the screen that will appear if you move your mouse. To inform you that the connection is ending, the progress bar will automatically appear in the last 10 seconds.</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1>What should I do during the connection?</h1><br />
                    <div>
                    During the connection, we ask that you are simply there, making eye contact with the other person.

Whatever is going on inside you is welcome. You don’t need to smile, but you can if you feel like it. If tears come, that’s ok too. If you feel disconnected, that’s welcome too.

We ask that you stay mostly still and do not replace verbal communication with gestures.
                    </div>
                </div>
           
            </div>
        );
    }
}

export default Services;