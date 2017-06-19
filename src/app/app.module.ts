
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService } from './entries'; // barrel: index.ts
import { InMemoryEntryService } from './backend';

@NgModule({ // decorator; postprocessing the module
	imports: [ // only for Angular modules!
		BrowserModule, // the application will be used in a webbrowser
		HttpModule,
		FormsModule,
		InMemoryWebApiModule.forRoot(InMemoryEntryService)// Do not use in a real application!
	], 
	providers: [
		EntryService
	],
	declarations: [
		AppComponent,
		EntryComponent, // put child components first
		EntryListComponent
	],
	bootstrap: [AppComponent]
}) 
export class AppModule {

}