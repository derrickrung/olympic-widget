import React from "react";
import PropTypes from "prop-types";

import "./Medal.css";

const Medal = ({ color }) => (
  <div
    className="medal"
    style={{
      backgroundColor: color
    }}
  />
);

Medal.propTypes = {
  color: PropTypes.string.isRequired
};

export default Medal;
