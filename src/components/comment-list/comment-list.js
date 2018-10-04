export default class CommentList extends HTMLElement {
  get error() {
    return this.getAttribute('error');
  }

  set error(error) {
    this.setAttribute('error', error);
  }

  get isFetching() {
    return this.getAttribute('fetching');
  }

  set isFetching(fetching) {
    this.setAttribute('fetching', fetching);
  }

  get comments() {
    return this.getAttribute('comments');
  }

  set comments(comments) {
    this.setAttribute('comments', comments);
  }

  static get observedAttributes() { return ['fetching', 'error', 'comments']; }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  template() {
    return `
        <div>${this.isFetching === 'true' ? 'Loading' : ''}</div>
        <div>${this.error !== 'null' ? this.error : ''}</div>
        ${JSON.parse(this.comments).map(comment => `
          <ing-comment-item commentId="${comment.id}" name="${comment.name}" comment="${comment.comment}"></ing-comment-item>
        `).join('')}
    `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
