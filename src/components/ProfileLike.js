import React, { Component } from "react";
import ProfileContext from "../provider/ProfileContext";

class ProfileLike extends Component {
  render() {
    return (
      <ProfileContext.Consumer>
        {(value) => {
          return (
            <div>
              <button
                onClick={() => {
                  value.setLike();
                }}
              >
                Like <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
            </div>
          );
        }}
      </ProfileContext.Consumer>
    );
  }
}

export default ProfileLike;
