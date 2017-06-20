import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';   

@Component({
	selector: 'app-entry', 
	templateUrl: 'entry.component.html', 
	styleUrls: ['entry.component.css']
})
export class EntryComponent {
	@Input() entry: Entry; // Input-decorator to receive data from the entry-list

	onCommentAdded(comment: {name: string; comment: string;}){ // inline definition
		this.entry.comments.push(comment);
	}
}