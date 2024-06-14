import React from "react";
import PropTypes from 'prop-types';


export function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {
    return (
      <tr>
        {isHeader ? (
          textSecondCell === null ? (
            <th colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          )
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  };

