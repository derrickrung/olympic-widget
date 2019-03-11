import React from "react";

import "./ErrorMessage.css";

const Errors = ({ errors }) => (
    <span className="color-red">
        Oops! There seems to be trouble fetching the data.
  </span>
);

export default Errors;
