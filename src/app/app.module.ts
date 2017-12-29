import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TabOneComponent} from './tab-one/tab-one.component';
import {TabTwoComponent} from './tab-two/tab-two.component';


@NgModule({
    declarations: [
        AppComponent,
        TabOneComponent,
        TabTwoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
