import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>About</h1>
                    <p>Real8 (pronounced "Relate") is a dating app that addresses the increase sense of isolation which has become a public health epidemic. Our team is comprised of psychologists and social scientists who have dedicated their careers to increasing human connection. </p>
                </div>

                <div className="container">
                    {/* <h1>How it Works</h1><br /> */}
                    <div>
                        Interaction sequence:
                <ol>
                            <li>You will get a randomly generated set of 3 questions (e.g., what is your perfect day like, when was the last time you cried and why, what's a regret you have);
</li>
                            <li>The invitee (person who was invited)picks the question you'd like both parties to answer;
</li>
                            <li>The inviter will answer first.
</li>
                            <li>The chat bot (played by a Real8 team member during this data gathering phase) will prompt each of you in how to respond more open-heartedly throughout the interaction
</li>
                        </ol><br />
                This sequence involves asynchronous timing like in texting-- you can take a little time to be thoughtful in your response,but we'd like this interaction to be completed within half an hour. It's like regular texting or emailing except there is a third party facilitrating an interaction that has a structured beginning, middle and end, and you both have the intention of wanting to be more real and get closer.
                </div>
                </div>

                <div className="container">
                    <h1>Why Real8</h1>
                    <br />
                    <div>Benefits:
                <ol>
                            <li>Use an empirically supported method to build intimacy and closer relationships</li>
                            <li>Get closer to someone you don't know in just half an hour</li>
                            <li>Or deepen your connection with someone important to you</li>
                            <li>The whole process is conveniently done through text messages<br />(amazing how well it works even over text)</li>
                        </ol>
                    </div>
                </div>
            </div>


        );
    }
}

export default Background;