export default class CommentForm extends HTMLElement {
  get isSubmitting() {
    return this.getAttribute('submitting');
  }

  connectedCallback() {
    this.render();
    this.form = this.querySelector('form');
    this.input = this.querySelector('input');
    this.textarea = this.querySelector('textarea');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  static get observedAttributes() { return ['submitting']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  onSubmit(event) {
    event.preventDefault();

    this.dispatchEvent(new CustomEvent('ing:submit', {
      detail: { name: this.input.value, comment: this.textarea.value },
    }));
  }

  template() {
    return `
        <form>
            <fieldset class="uk-fieldset">
                <legend class="uk-legend">Add new comment!</legend>
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Your Name?">
                </div>

                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="4" placeholder="Your Comment here?"></textarea>
                </div>

                <div class="uk-margin">
                    <button class="uk-button uk-button-primary" type="submit" ${this.isSubmitting === 'true' ? 'disabled' : ''}>Comment!</button>
                </div>
            </fieldset>
        </form>
    `;
  }

  render() {
    this.innerHTML = this.template();
  }
}
