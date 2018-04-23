import React, { Component } from 'react';
import './Donation.css';
import TextInputField from '../../../../components/input-controls/TextInputField';

export default class Donation extends Component {
  render() {
    return (
      <div id="donation-component" className="mdl-grid">
        <h2>Дарения</h2>
        <div className="mdl-cell mdl-cell--3-offset-desktop mdl-cell--1-offset-tablet mdl-cell--5-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone">
          <div className="donationTypeForm demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Направи дарение</h2>
            </div>
            <div className="mdl-card__supporting-text">
              С твоето дарение ти допринасяш за развитието на платформата и
              усъвършенстването ѝ. Екипът на Книга за Книга ти благодари за
              решението!
            </div>
            <div className="donation-buttons">
              <div className="singleDonationButton">
                <div className="singleDonation">
                  <button type="button" className="mdl-chip">
                    <span className="mdl-chip__text">Еднократно</span>
                  </button>
                </div>
              </div>
              <div className="monthlyDonationButton">
                <div className="monthlyDonation">
                  <button type="button" className="mdl-chip">
                    <span className="mdl-chip__text">Месечно</span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="money-for-donation">
              <button type="button" className="mdl-chip">
                <span className="mdl-chip__text">10лв</span>
              </button>
              <button type="button" className="mdl-chip">
                <span className="mdl-chip__text">20лв</span>
              </button>
              <button type="button" className="mdl-chip">
                <span className="mdl-chip__text">30лв</span>
              </button>
              <button type="button" className="mdl-chip">
                <span className="mdl-chip__text">Друга сума</span>
              </button>
            </div>
            <div className="information-about-donator">
              <TextInputField
                {...{
                  value: '',
                  handleChange: eventData => {},
                  id: 'first-name',
                  type: 'text',
                  label: 'Име',
                  tooltipMessage: 'Въведете Вашето име.'
                }}
              />
              <TextInputField
                {...{
                  value: '',
                  handleChange: eventData => {},
                  id: 'second-name',
                  type: 'text',
                  label: 'Фамилия',
                  tooltipMessage: 'Въведете Вашата фамилия.'
                }}
              />
              <TextInputField
                {...{
                  value: '',
                  handleChange: eventData => {},
                  id: 'telephone',
                  type: 'text',
                  label: 'Телефон',
                  tooltipMessage: 'Въведете Вашият телефон.'
                }}
              />
              <TextInputField
                {...{
                  value: '',
                  handleChange: eventData => {},
                  id: 'email',
                  type: 'text',
                  label: 'Имейл',
                  tooltipMessage: 'Въведете Вашият имейл.'
                }}
              />
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                ДАРИ
              </a>
            </div>
            <div className="other-method-for-donation">
              <span>Други начини за даряване</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
