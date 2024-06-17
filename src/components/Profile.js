import React, { Component } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileLike from "./ProfileLike";
import ProfileStateProvider from "../provider/ProfileStateProvider";
class Profile extends Component {
  render() {
    return (
      <ProfileStateProvider>
        <div className="container">
          <ProfilePicture />
          <ProfileLike />
        </div>
      </ProfileStateProvider>
    );
  }
}

export default Profile;
