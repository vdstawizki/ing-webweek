export default class CommentItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }
  
    template() {
        return `
            <div class="uk-margin uk-card uk-card-default uk-dark">
                <div class="uk-card-body">
                    <p class="card-name">${this.getAttribute('name')}</p>
                    <p>${this.getAttribute('comment')}</p>
                </div>
            </div>
            `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
