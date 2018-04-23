import React from 'react';
import ArticleCommentInputForm from './ArticleCommentInputForm';
import ArticleComment from './ArticleComment';

export default function ArticleCommentsList(props) {
  return (
    <div className="mdl-color-text--primary-contrast mdl-card__supporting-text comments">
      <ArticleCommentInputForm />
      <ArticleComment />
      <ArticleComment />
      <ArticleComment />
    </div>
  );
}
