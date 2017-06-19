import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent } from './entries'; // barrel: index.ts

@NgModule({ // decorator; postprocessing the module
	imports: [
		BrowserModule, // the application will be used in a webbrowser
		HttpModule
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