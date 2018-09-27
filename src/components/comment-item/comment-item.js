export default class CommentItem extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get comment() {
    return this.getAttribute('comment');
  }

  set comment(value) {
    this.setAttribute('comment', value);
  }

  connectedCallback() {
    this.render();
  }

  template() {
    console.log(this);
    return `
        <div class="uk-margin uk-card uk-card-default uk-dark">
            <div class="uk-card-body">
                <p><strong>${this.name}</strong></p>
                <p>${this.comment}</p>
            </div>
        </div>
    `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
