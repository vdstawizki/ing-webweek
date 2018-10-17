export default class CommentList extends HTMLElement {
  get error() {
    return this.getAttribute('error');
  }

  get isFetching() {
    return this.getAttribute('fetching');
  }

  get comments() {
    return this.getAttribute('comments');
  }

  static get observedAttributes() { return ['fetching', 'error', 'comments']; }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  template() {
    return `
        ${this.isFetching === 'true' ? '<div>Loading</div>' : ''}
        ${this.error !== 'null' ? `<div>${this.error}</div>` : ''}
        ${JSON.parse(this.comments).map((comment, index) => `
          <ing-comment-item commentId="${comment.id}" name="${comment.name}" comment="${comment.comment}" style="transition-delay:${index * 80}ms" ></ing-comment-item>
        `).join('')}
    `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
