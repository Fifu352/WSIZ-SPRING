import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExecResponse} from "../model/exec-response";

@Component({
    selector: 'app-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.less']
})
export class MonitorComponent implements OnInit {

    host: string;
    output: string[];
    errors: string[];
    adminpass: string = 'secret!';
    command: string = 'df';
    origin: string;
    user: string;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.origin = window.location.origin;
        //this.host = this.origin + '/exec';
        this.host = 'http://localhost:8086/exec';
        console.log(`using origin: ${this.host}`);
        this.init_monitor();
    }


    init_monitor() {
        let url = this.host + `?user=${this.user}&pass=${this.adminpass}&cmd=istats`;
        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        })
    }

}
