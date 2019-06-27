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
import { MonitorComponent } from './monitor/monitor.component';
import { FinderComponent } from './finder/finder.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        MenuComponent,
        ExecComponent,
        MonitorComponent,
        FinderComponent,
        ScheduleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbDatepickerModule,
        NgbTimepickerModule
    ],
    providers: [MenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
