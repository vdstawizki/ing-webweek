export default class CommentItem extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get commentId() {
    return this.getAttribute('commentId');
  }

  set commentId(id) {
    this.setAttribute('commentId', id);
  }

  get comment() {
    return this.getAttribute('comment');
  }

  set comment(value) {
    this.setAttribute('comment', value);
  }

  set visible(value) {
    this.setAttribute('visible', value);
  }

  connectedCallback() {
    this.render();

    this.querySelector('.js-delete-comment').addEventListener('click', this.onDelete.bind(this));
  }

  onDelete(event) {
    event.preventDefault();

    this.dispatchEvent(new CustomEvent('ing:delete', {
      detail: this.commentId,
      bubbles: true,
    }));
  }

  template() {
    return `
        <div class="uk-margin uk-card uk-card-default uk-dark">
            <div class="uk-card-body">
                <p class="card-name">${this.name}</p>
                <p>${this.comment}</p>
                <p class="card-delete"><a class="js-delete-comment" href="#">delete comment</a></p>
            </div>
        </div>
    `;
  }

  render() {
    this.innerHTML = this.template();
    setTimeout(() => {
      this.visible = true;
    }, 100);
  }
}
