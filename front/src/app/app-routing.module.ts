import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ExecComponent} from "./exec/exec.component";
import {MonitorComponent} from "./monitor/monitor.component";
import {FinderComponent} from "./finder/finder.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {PasswordComponent} from "./password/password.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'exec', component: ExecComponent},
    {path: 'monitor', component: MonitorComponent},
    {path: 'finder', component: FinderComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'password', component: PasswordComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
