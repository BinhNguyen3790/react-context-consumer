import React, { Component } from "react";
import { ProfileContext } from "../context/ProfileContext";

class ProfileStateProvider extends Component {
  state = {
    like: 1,
  };
  setLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };
  render() {
    return <ProfileContext.Provider value={{ stateLike: this.state.like, setLike: this.setLike }}>{this.props.children}</ProfileContext.Provider>;
  }
}

export default ProfileStateProvider;
