import React, { Component } from 'react';
import Checkbox from '../../../components/input-controls/Checkbox';
import TextInputField from '../../../components/input-controls/TextInputField';
import Textarea from '../../../components/input-controls/Textarea';

export default class ContactUsForm extends Component {
  render() {
    return (
      <div>
        <h2 id="question">За какво би искал да се обърнеш към нас? </h2>
        <Checkbox
          {...{
            id: this.props.id,
            type: 'checkbox',
            checkboxMessage: 'Въпрос'
          }}
        />
        <Checkbox
          {...{
            id: this.props.id,
            type: 'checkbox',
            checkboxMessage: 'Препоръка'
          }}
        />
        <Checkbox
          {...{
            id: this.props.id,
            type: 'checkbox',
            checkboxMessage: 'Мнение'
          }}
        />
        <Checkbox
          {...{
            id: this.props.id,
            type: 'checkbox',
            checkboxMessage: 'Похвала'
          }}
        />
        <TextInputField
          {...{
            handleChange: () => {},
            id: 'name',
            type: 'text',
            label: 'Име...',
            pattern: '[A-Z,a-zа-яА-Я, ]*',
            errorMessage: 'Само букви и интервали са позволени'
          }}
        />
        <TextInputField
          {...{
            handleChange: () => {},
            id: 'email',
            type: 'email',
            label: 'Имейл...',
            pattern:
              "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
            errorMessage: 'Само букви и интервали са позволени'
          }}
        />
        <Textarea
          {...{
            value: '',
            id: 'note',
            handleChange: () => {},
            rows: 5,
            type: 'text',
            textareaMessage: 'Вашето съобщение:'
          }}
        />
        <p>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            type="submit"
          >
            Изпрати
            <span className="mdl-button__ripple-container">
              <span className="mdl-ripple" />
            </span>
          </button>
        </p>
      </div>
    );
  }
}
