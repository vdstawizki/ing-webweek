export default class CommentForm extends HTMLElement {
	connectedCallback() {
    this.render();
		this.input = this.querySelector('input');
		this.textarea = this.querySelector('textarea');
    this.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();

		this.dispatchEvent(new CustomEvent('ing:submit', {
			detail: { name: this.input.value, comment: this.textarea.value }
    }));
	}

	template() {
		return `
        <form>
            <fieldset class="uk-fieldset">
                <legend class="uk-legend">Add new comment!</legend>
                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Your Name?" required>
                </div>

                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="4" placeholder="Your Comment here?" required></textarea>
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
