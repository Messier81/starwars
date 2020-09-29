import React from "react";
import mp3_file from "./sound/imperialmarch.mp3";

const AudioPlayer = function (props) {
  return (
    <audio autoPlay={true} controls={true}>
      <source type="audio/mp3" src={mp3_file} />
    </audio>
  );
};
export default AudioPlayer;
