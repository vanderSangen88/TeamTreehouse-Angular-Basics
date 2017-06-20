import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-entry-comment-form',
	templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
	name: string = "";
	comment: string = "";
	@Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();

	// method declaration
	onSubmit() {
		let comment = { name: this.name, comment: this.comment };
		this.onCommentAdded.emit(comment);
	}
}