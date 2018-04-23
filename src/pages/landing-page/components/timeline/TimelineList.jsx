import React, { Component } from 'react';
import './TimelineList.css';

export default class TimelineList extends Component {
  render() {
    return (
      <div id="timeline-component" className="timeline-container">
        <h2>Нашият път</h2>
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h5 className="year">Май 2019</h5>
              <h3 className="timeline-entry-title">
                <a href="">
                  Вкарване на блокчейн слой за пълна прозрачност на мрежата
                </a>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h5 className="year">Май 2018</h5>
              <h3 className="timeline-entry-title">
                <a href="">
                  Стартиране на платформата. Всичко за идеята и нейното
                  осъществяване.
                </a>
              </h3>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h5 className="year">Май 2018</h5>
              <h3 className="timeline-entry-title">
                <a href="">
                  Стартиране на платформата. Всичко за идеята и нейното
                  осъществяване.
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
