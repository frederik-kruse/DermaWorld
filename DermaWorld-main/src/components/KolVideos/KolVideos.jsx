import React from "react";
import PlayBtn from "./PlayBtn"; //import of play button, from a .jsx file
import "./kolvideos.css";

const KolVideos = () => {
  return (
    <div className="kolVideos_area">
      <div className="KolVideos_size">
        <div className="VideoBox_flex">
          <div className="KolVideos_text">
            <h1 className="KolVideos_heading">
              KOL Videos - get expert insights here
            </h1>
            <p className="kolVideos_breadText">
              See what Key opinion leaders have to say about their experiences
              with Adtralza®
            </p>
          </div>
          <div className="VideoBox">
            <section className="VideoBox_Button">
               <PlayBtn /> 
            </section>
            <div className="Video_text">
              <h4 className="Video_title">Video title</h4>
              <p>
                Short description of the contents or subject of the video. You
                can upload a screen from the video as thumbnail image
              </p>
            </div>
          </div>
          <div className="VideoBox">
            <section className="VideoBox_Button">
              <PlayBtn />
            </section>
            <div className="Video_text">
              <h4 className="Video_title">Video title</h4>
              <p>
                Short description of the contents or subject of the video. You
                can upload a screen from the video as thumbnail image
              </p>
            </div>
          </div>
          <div className="VideoBox">
            <section className="VideoBox_Button">
              <PlayBtn />
            </section>
            <div className="Video_text">
              <h4 className="Video_title">Video title</h4>
              <p>
                Short description of the contents or subject of the video. You
                can upload a screen from the video as thumbnail image
              </p>
            </div>
          </div>
          <div className="VideoBox">
            <section className="VideoBox_Button">
              <PlayBtn />
            </section>
            <div className="Video_text">
              <h4 className="Video_title">Video title</h4>
              <p>
                Short description of the contents or subject of the video. You
                can upload a screen from the video as thumbnail image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolVideos;
