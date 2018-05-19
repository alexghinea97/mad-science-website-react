import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from 'material-ui/Divider';
import LocalizedStrings from '../../../LocalizedStrings';
import './Hiring.css';

export default function hiring(props) {
  return (
    <div id="hiring">
      <Paper elevation={4} style={{ padding: '15px' }}>
        <h2>{LocalizedStrings.body.hiring.title}</h2>
        <Divider />
        <h3>{LocalizedStrings.body.hiring.textOne}</h3>
        <h5>{LocalizedStrings.body.hiring.textSecond}</h5>
      </Paper>
      <div id="mc_embed_signup">
        <form
          action="https://github.us18.list-manage.com/subscribe/post?u=8777db87bb8bbed5bf8b9b93b&amp;id=2b756700bb"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">
              {LocalizedStrings.body.hiring.toSubscribeLabel}
            </label>
            <input
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder={LocalizedStrings.body.hiring.input}
              required
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_8777db87bb8bbed5bf8b9b93b_2b756700bb"
                tabIndex="-1"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value={LocalizedStrings.body.hiring.button}
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
