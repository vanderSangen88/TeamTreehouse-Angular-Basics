import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({ // decorator; postprocessing the module
	imports: [BrowserModule], // the application will be used in a webbrowser
	declarations: [AppComponent],
	bootstrap: [AppComponent]
}) 
export class AppModule {

}