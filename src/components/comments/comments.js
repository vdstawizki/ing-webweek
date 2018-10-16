import store from '../../store';
import { fetchComments, addComment, deleteComment } from '../../actions/comments-actions';

export default class Comments extends HTMLElement {
  connectedCallback() {
    this.props = {};
    this.store = store;

    this.store.subscribe(this.onStoreChanged.bind(this));

    this.commentForm = this.querySelector('ing-comment-form');
    this.commentList = this.querySelector('ing-comment-list');
    this.commentForm.addEventListener('ing:submit', this.onSubmit.bind(this));
    this.addEventListener('ing:delete', this.onDelete.bind(this));
    store.dispatch(fetchComments());
  }

  onSubmit(event) {
    const { name, comment } = event.detail;
    this.store.dispatch(addComment({ name, comment }));
  }

  onDelete(event) {
    const id = event.detail;
    this.store.dispatch(deleteComment(id));
  }

  onStoreChanged() {
    this.props = this.store.getState();

    this.commentList.setAttribute('error', this.props.error);
    this.commentList.setAttribute('fetching', this.props.isFetching);
    this.commentList.setAttribute('comments', JSON.stringify(this.props.comments.reverse()));
    this.commentForm.setAttribute('submitting', this.props.isSubmitting);
  }
}
