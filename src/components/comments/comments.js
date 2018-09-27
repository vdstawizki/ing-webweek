const createNewCommentItem = (name, comment) => {
  const newItem = document.createElement('ing-comment-item');
  newItem.name = name;
  newItem.comment = comment;

  return newItem;
};

export default class Comments extends HTMLElement {
  connectedCallback() {
    this.commentForm = this.querySelector('ing-comment-form');
    this.container = this.querySelector('.js-comments-container');
    this.commentForm.addEventListener('ing:submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    const { name, comment } = event.detail;

    this.container.appendChild(createNewCommentItem(name, comment));
  }
}
