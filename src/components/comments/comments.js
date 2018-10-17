export default class Comments extends HTMLElement {
  connectedCallback() { 
    this.commentForm = this.querySelector('ing-comment-form');
    this.container = this.querySelector('.comments-container');
    this.commentForm.addEventListener('ing:submit', this.formSubmit.bind(this));
   }

   createNewCommentItem(name, comment) {
     const item = document.createElement('ing-comment-item');
     item.setAttribute('name', name);
     item.setAttribute('comment', comment);
     return item;
   }

   formSubmit(event) {
    this.container.appendChild(this.createNewCommentItem(event.detail.name, event.detail.comment));
   } 
}
