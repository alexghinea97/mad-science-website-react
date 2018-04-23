import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AsideMenu(props) {
  return (
    <ul className="demo-list-item mdl-list">
      <li className="mdl-list__item">
        <NavLink to="/about/idea" className="mdl-list__item-primary-content">
          {' '}
          Нашите цели{' '}
        </NavLink>
      </li>
      <li className="mdl-list__item">
        <NavLink to="/about/team" className="mdl-list__item-primary-content">
          Екипът
        </NavLink>
      </li>
    </ul>
  );
}
