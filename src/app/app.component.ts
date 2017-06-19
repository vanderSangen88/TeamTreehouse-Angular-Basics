import { Component } from '@angular/core';

@Component({
	selector: 'app-root', // required prop
	templateUrl: 'app.component.html', // required prop
	styleUrls: ['app.component.css'] // common practice to include a stylesheet even empty
})
export class AppComponent {
	emoji = ['🎉', '😍', '😜', '👍'];
	activeEmoji: string;
	changeEmoji() {
		this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
	}
}