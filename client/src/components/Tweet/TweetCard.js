import React from 'react'
import pic from "./avatar.png";

const TweetCard = (props) => {
  return (
    <div class="ui card" style={{ width: "600px", height: "auto", marginBottom: '20px', padding: '1px' }}>
      <div class="content">
        <img class="ui avatar image" src="https://i.pinimg.com/236x/a7/39/b6/a739b66117d68315626cff61e1da5402.jpg" alt="user img" />
        {props.username}
        <div class="meta">{props.createdAt.split('T')[1].split('.')[0]}</div>
      </div>
      <div class="description">
        {props.description}
      </div>
      {props.images[0] && (
        <div class="image" >
          <img src={props.images[0]} alt="tweet img" style={{ width: "600px", height: "auto", padding: '10px' }} />
        </div>)}

      <div class="ui horizontal segments" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F", width: "600px" }}>
        <div class="ui segment"  >
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="comment icon"></i>comment</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="retweet icon" ></i>retweet</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="heart outline like icon" ></i>liked</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="bookmark outline icon" ></i>saved</a>
        </div>
      </div>

      <div class="extra content" style={{ width: "615px", height: "auto", padding: '1px' }} >
        <div class="ui large transparent left icon input">

          <i>
            <img class="ui avatar image" src="https://i.pinimg.com/236x/83/ac/b1/83acb189d0fc48b18d609085661a7ac4.jpg" alt="user avatar img" />
          </i>
          <input type="text" placeholder="Tweet your reply..." />
        </div>
      </div>
    </div>
  )
}

export default TweetCard;