import React, { Component } from "react";
import { ProfileContext } from "../context/ProfileContext";

class ProfilePicture extends Component {
  render() {
    return (
      <ProfileContext.Consumer>
        {(value) => {
          return (
            <div className="card">
              <img className="card-img-top" src="https://gamek.mediacdn.vn/133514250583805952/2024/1/24/photo-1706086830143-17060868303522136451227.png" alt="Title" />

              <div className="card-body">
                <h4 className="card-title">Roronoa Zoro</h4>
                <p className="card-text">Alway forget the way to go!!!</p>
                <p>
                  Like: {value.stateLike.like} <i className="fa fa-heart" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          );
        }}
      </ProfileContext.Consumer>
    );
  }
}

export default ProfilePicture;
