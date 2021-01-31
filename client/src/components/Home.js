import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Tweet from "./Tweet/Tweet";
import TrendsHashtag from "./TrendsHashtag";
import WhoToFollow from "./WhoToFollow";
import PostTweets from "./PostTweets";

function Home(props) {
    return (
        <div style={{ backgroundColor: '#FAFAFB' }}>
            <div style={{
                position: 'absolute', left: '40%', top: '20%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <PostTweets />
            </div>
            <div style={{
                position: 'absolute', left: '80%', top: '30%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <TrendsHashtag />
            </div>
            <div style={{
                position: 'absolute', left: '80%', top: '110%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <WhoToFollow />
            </div>
            <div style={{
                position: 'absolute', left: '40%', top: '750%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                {/* <Mainbar> */}
                {/* <Tweetbar> */}
                <Tweet />

                {/* </Tweetbar> */}
                {/* </Mainbar> */}
            </div>
        </div >
    )
}

export default Home;
