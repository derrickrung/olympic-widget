import React from "react";
import PropTypes from "prop-types";

import "./TableRow.css";

const TableRow = ({
    country: { code, gold, silver, bronze, total, flagStyle },
    rank
}) => (
        <tr>
            <td className="bold color-dark-grey">{rank}</td>
            <td>
                <div className="flag" style={flagStyle} />
            </td>
            <td className="bold color-dark-grey align-left">{code}</td>
            <td>{gold}</td>
            <td>{silver}</td>
            <td>{bronze}</td>
            <td>
                <strong>{total}</strong>
            </td>
        </tr>
    );

TableRow.propTypes = {
    country: PropTypes.shape({
        code: PropTypes.string.isRequired,
        gold: PropTypes.number.isRequired,
        silver: PropTypes.number.isRequired,
        bronze: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        flagStyle: PropTypes.shape({
            backgroundPositionY: PropTypes.string.isRequired
        }).isRequired
    }),
    rank: PropTypes.number.isRequired
};

export default TableRow;
