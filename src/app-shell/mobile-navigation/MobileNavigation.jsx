import React, { Component } from 'react';
import './MobileNavigation.css';
import CommonNavigation from '../navigation/CommonNavigation';

export default class MobileNavigation extends Component {
  render() {
    return (
      <div id="mobile-navigation" className="mdl-layout__drawer">
        <span className="mdl-layout-title">Mad Science</span>
        <CommonNavigation />
      </div>
    );
  }
}
