import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExecResponse} from '../model/exec-response';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {interval, Subscription} from "rxjs";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {

    host: string;
    output: string[];
    errors: string[];
    adminpass = 'secret!';
    command = 'df';
    origin: string;
    model: NgbDateStruct;
    myDate = new Date();
    subscription: Subscription;
    date: { year: number, month: number, day: number };
    time: { hour: number, minute: number };
    schedules = [];
    user: string;
    source = interval(10000);

    constructor(private http: HttpClient, private calendar: NgbCalendar) {
    }


    ngOnInit() {
        this.origin = window.location.origin;
        // this.host = this.origin + '/exec';
        this.host = 'http://localhost:8086/exec';
        this.schedules  = JSON.parse(localStorage.getItem("data")); //returns "xxx"
        console.log(`using origin: ${this.host}`);
        this.subscription = this.source.subscribe(val => this.executer());
    }

    delete(a) {
        const index: number = this.schedules.indexOf(a);
        if (index !== -1) {
            this.schedules.splice(index, 1);
        }
        localStorage.setItem('data',JSON.stringify( this.schedules));
    }

    executer() {
        console.log("a");
        this.myDate = new Date();
        this.schedules.forEach(element => {
            console.log(this.myDate.getHours() );
            console.log(this.myDate.getMinutes() );
                if (element.year == this.myDate.getFullYear() && element.month == this.myDate.getMonth() +1&& element.day == this.myDate.getDate() && element.hour == this.myDate.getHours() && element.minute == this.myDate.getMinutes()) {
                    this.executeCommand(element.command);
                }
            }
        )
    }

    save() {
        const item = {
            year: this.date.year,
            month: this.date.month,
            day: this.date.day,
            hour: this.time.hour,
            minute: this.time.minute,
            command: this.command
        };

        this.schedules.push(item);
        localStorage.setItem('data',JSON.stringify( this.schedules));
        console.log(this.schedules);
    }

    executeCommand(command) {
        const url = this.host + `?user=${this.user}&pass=${this.adminpass}&cmd=${command}`;
        console.log(this.command);
        console.log(url);
        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        });
    }


}
