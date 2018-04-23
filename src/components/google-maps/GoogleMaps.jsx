import React, { Component } from 'react';
import './GoogleMaps.css';

export default class GoogleMaps extends Component {
  render() {
    function initMap() {
      var uluru = { lat: 42.698334, lng: 23.319941 };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

    return (
      <div id="map">
        <h3>My Google Maps Demo</h3>
        <div id="map" />
      </div>
    );
  }
}
