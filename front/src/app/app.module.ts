import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import {ExecComponent} from './exec/exec.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        MenuComponent,
        ExecComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [MenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
