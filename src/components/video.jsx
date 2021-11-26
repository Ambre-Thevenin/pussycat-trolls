import React from "react";
import PropTypes from "prop-types";

const YoutubeVid = ({ embedId }) => (
  <div className="video">
    <iframe
      width="700"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeVid.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeVid;