import React from "react";
import PropTypes from "prop-types";

const YoutubeVid = ({ embedId }) => (
    <iframe
    width="650"
    height="325"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      display="flex"
      margin="auto"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);

YoutubeVid.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeVid;