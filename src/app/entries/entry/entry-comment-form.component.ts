import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-entry-comment-form',
	templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
	name: string = "";
	comment: string = "";
	@Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();
	@ViewChild('commentForm') commentForm: NgForm;

	// method declaration
	onSubmit(commentForm: NgForm) {
		let comment = { name: this.name, comment: this.comment };
		this.onCommentAdded.emit(comment);
		this.commentForm.resetForm();
	}
}