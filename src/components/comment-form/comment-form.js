export default class CommentForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  template() {
    console.log(this);
    return `
        <form>
            <fieldset class="uk-fieldset">
                <legend class="uk-legend">Add new comment!</legend>
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Your Name?">
                </div>

                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Your Comment here?"></textarea>
                </div>
                
                <div class="uk-margin">
                    <button class="uk-button uk-button-primary" type="submit">Comment!</button>
                </div>
            </fieldset>
        </form>
    `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
