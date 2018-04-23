import React, { Component } from 'react';
import './FAQ.css';
import QuestionAnswerPair from './components/QuestionAnswerPair';

export default class FAQ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qaPairs: [
        {
          questionTitle: 'Какво представлява нашата платформа?',
          answer:
            'Тук ще може всеки един читател да споделя своите книги с хора, които желаят да прочетат някоя от неговите придобивки и също така той да получава желаната от него книга.'
        },
        {
          questionTitle: 'Какво представлява нашата платформа?',
          answer:
            'Тук ще може всеки един читател да споделя своите книги с хора, които желаят да прочетат някоя от неговите придобивки и също така той да получава желаната от него книга.'
        }
      ]
    };
  }
  render() {
    return (
      <div id="faq-page">
        <h1>Често задавани въпроси</h1>
        <div className="mdl-grid">
          <div className="mdl-cell--2-offset-desktop" />
          <div className="mdl-cell--8-col-desktop">
            <ul className="demo-list-three mdl-list">
              {this.state.qaPairs.map(function(qaPair, key) {
                return <QuestionAnswerPair {...qaPair} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
