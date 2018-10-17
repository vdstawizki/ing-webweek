export default class Comments extends HTMLElement {
  connectedCallback() {
    this.props = {};

    this.commentForm = this.querySelector('ing-comment-form');
    this.commentList = this.querySelector('ing-comment-list');
    this.commentForm.addEventListener('ing:submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    const { name, comment } = event.detail;
    // TODO: Handle submit
  }

  onStoreChanged() {
    // TODO: Save to props and populate dumb children
  }
}
