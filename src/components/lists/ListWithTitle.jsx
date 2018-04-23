// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './ListWithTitle.css';

export default function ListWithTitle(props) {
  return (
    <div>
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="title-cell mdl-data-table__cell--non-numeric">
              {props.title}
            </th>
          </tr>
        </thead>

        {props.values.map(function(value, index) {
          return (
            <tbody>
              <tr
                onClick={eventData => {
                  const selectedElement =
                    eventData.currentTarget.children[0].innerHTML;
                  props.handleClick(selectedElement);
                }}
              >
                <td className="body-cell mdl-data-table__cell--non-numeric">
                  {value}
                </td>
                <td>
                  <i className="material-icons">delete</i>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

ListWithTitle.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};
