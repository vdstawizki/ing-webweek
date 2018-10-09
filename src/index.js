import Comments from './components/comments/comments';
import CommentForm from './components/comment-form/comment-form';
import CommentItem from './components/comment-item/comment-item';
import CommentList from './components/comment-list/comment-list';

import './stylesheets/index.scss';

if (!customElements.get('ing-comments')) {
  customElements.define('ing-comments', Comments);
}

if (!customElements.get('ing-comment-form')) {
  customElements.define('ing-comment-form', CommentForm);
}

if (!customElements.get('ing-comment-item')) {
  customElements.define('ing-comment-item', CommentItem);
}

if (!customElements.get('ing-comment-list')) {
  customElements.define('ing-comment-list', CommentList);
}

