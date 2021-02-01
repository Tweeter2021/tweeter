import React from "react";
import pic from "../components/avatar.png";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

const SearchPeople = (props) => {
  return (
    <div class="ui segment">
      {/* //person1 */}
      <div class="ui segment">
        <div class="content">
          <button class="ui right floated primary active button">
            {/* <i class="user icon"></i> */}
            <PersonAddOutlinedIcon /> Follow
        </button>
          {/* <button class="ui right floated primary button">follow</button> */}
          <img class="ui avatar image" alt='useravatar' src={props.user.profileImg} />
          @{props.user.username}
          {props.user.followers && (
            <div class="meta">{props.user.followers.length} followers</div>

          )}
          {!props.user.followers && (
            <div class="meta">0 followers</div>

          )}
        </div>
        <div class="description">{props.user.description}</div>

      </div>



    </div>
  );
};
export default SearchPeople;
