import React, { Component } from 'react';
import ArticleCommentsList from './ArticleCommentsList';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: 'Some title of the article',
      description: [
        'The Material Design Lite (MDL) snackbar component is a container used to notify a user of an operations status. It displays at the bottom of the screen. A snackbar may contain an action button to execute a command for the user. Actions should undo the committed action or retry it if it failed for example. Actions should not be to close the snackbar. By not providing an action, the snackbar becomes a toast component.',
        'Kурсът е силно насочен към практиката, с огромен брой упражнения в клас и практически изпит. Всички задачи от упражненията и изпитите се оценяват автоматизирано с онлайн judge система.',
        'We have covered the most essential components that you will need to build a website (<BrowserRouter>, <Route>, and <Link>). Still, there are a few more components that this did not cover (and props of components that were covered). Fortunately, React Router has excellent documentation website that you can use to find more in-depth information about its components. The website also provides a number of working examples with source code.',
        'Знаех, някак, че Шмит е доста добър. Но, че може да е тотален шемет, ме изненада. Реквиемът му за любовта беше като най-вкусния попадал ми еклер - миниатюрен, направен с хирургична прецизност и топящ се в съзнанието. А мнението му в книгата за съвременния култ към тялото - отдавна не бях се забавлявал така - “жените... сухи, костеливи ... с тъмнокафява кожа на стар моряк, несъмнено придобита на висока цена в солариумите, носеха върху голото си тяло, което заради прекалено спортния си вид, вече не будеше желание, флуоресциращи гащеризони, каквито човек може да види, най-вече върху табели обозначаващи строеж.... мъжете .... изглеждаха подути не знам от какво, от тренировки ли, от глупост или от претенция, и ставите на наедрелите им крайници оставаха единственото място по телата им, където за беда нищо не бе набухнало като суфле. От всичко това лъхаше щастливата вулгарност на малоумника, който се мисли за прав.” Искрено препоръчвам на всеки, търсещ бърз интелектуален шот.',
        'Reducers specify how the applications state changes in response to actions sent to the store. Remember that actions only describe the fact that something happened but dont describe how the applications state changes.'
      ]
    };
  }

  render() {
    return (
      <div id="article-partial" className="mdl-grid">
        <div className="mdl-grid mdl-cell--4-offset-dektop" />
        <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--4dp">
          <article className="mdl-card">
            <div className="mdl-card__media mdl-color-text--grey-50">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">
                  {this.state.articleTitle}
                </h2>
              </div>
            </div>

            {/* <div className="mdl-color-text--grey-700 mdl-card__supporting-text meta">
                            <div className="minilogo"></div>
                            <div>
                                <strong>The Newist</strong>
                                <span>2 days ago</span>
                            </div>
                            <div className="section-spacer"></div>
                            <div className="meta__favorites">
                                425 <i className="material-icons" role="presentation">favorite</i>
                                <span className="visuallyhidden">favorites</span>
                            </div>
                            <div>
                                <i className="material-icons" role="presentation">bookmark</i>
                                <span className="visuallyhidden">bookmark</span>
                            </div>
                            <div>
                                <i className="material-icons" role="presentation">share</i>
                                <span className="visuallyhidden">share</span>
                            </div>
                        </div> 
            */}

            <div className="mdl-card__supporting-text mdl-color-text--grey-700">
              {this.state.description.map(function(description, i) {
                return <p key={i}>{description}</p>;
              })}
            </div>
            <ArticleCommentsList />
          </article>
          <nav className="demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4col-phone">
            <a href="index.html" className="demo-nav__button">
              <button
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900"
                role="presentation"
              >
                <i className="material-icons">arrow_back</i>
              </button>
              Newer
            </a>
            <div className="section-spacer" />
            <a href="index.html" className="demo-nav__button">
              Older
              <button
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900"
                role="presentation"
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
