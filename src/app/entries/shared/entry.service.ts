import { Entry } from './entry.model';
import { Injectable } from 'angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

	constructor(private http: Http) {

	}

	getEntries(): Promise<Entry[]> { // generic type
		return this.http.get('/app/entries')
				.toPromise()
				then(response => response.json().data as Entry[]);
	}
}