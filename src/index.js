import CommentForm from './components/comment-form/comment-form';
import CommentItem from './components/comment-item/comment-item';

import './stylesheets/index.scss';

if (!customElements.get('ing-comment-form')) {
  customElements.define('ing-comment-form', CommentForm);
}

if (!customElements.get('ing-comment-item')) {
    customElements.define('ing-comment-item', CommentItem);
}