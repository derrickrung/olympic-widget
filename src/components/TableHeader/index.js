import React from "react";
import PropTypes from "prop-types";

import "./TableHeader.css";

const Tab = ({ children, onClick, selectedSort, type }) => (
  <th
    onClick={onClick}
    className={`clickable ${type && selectedSort === type ? "active" : null}`}
  >
    {children}
  </th>
);

const Headers = ({ selectedSort, sortInfo }) => (
  <tr>
    <th />
    <th />
    <th />
    {Object.entries(sortInfo).map(([type, { onClick, children }]) => (
      <Tab key={`${type}-header`} {...{ onClick, selectedSort, type }}>
        {children}
      </Tab>
    ))}
  </tr>
);

Headers.propTypes = {
  selectedSort: PropTypes.string.isRequired,
  sortInfo: PropTypes.object
};

export default Headers;
