import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss"; // Has to be installed locally to work //npm install sass-loader sass webpack --save-dev
import "./adtralzaVideo.css";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube" //plateforms such as YouTube, Vimeo and Youku works on it.
            isOpen={this.state.isOpen}
            videoId="k-OZH9yT60g" //Video code for showing the right video
            onClose={() => this.setState({ isOpen: false })}
          />
          {/* Button to start video */}
          <button className="Video_Btn" onClick={this.openModal}>
            Watch our story
          </button>
        </div>
      </div>
    );
  }
}

export default videoModal;
