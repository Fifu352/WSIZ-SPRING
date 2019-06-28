import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExecResponse} from "../model/exec-response";

@Component({
    selector: 'app-finder',
    templateUrl: './finder.component.html',
    styleUrls: ['./finder.component.less']
})
export class FinderComponent implements OnInit {

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
        let url = this.host + `?user=${this.user}&pass=${this.adminpass}&cmd=ps%20-A`;
        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        })
    }
    kill(s) {
        let url = this.host + `?user=${this.user}&pass=${this.adminpass}&cmd=kill%20-9%20`+s;

        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        })
         url = this.host + `?user=${this.user}&pass=${this.adminpass}&cmd=ps%20-A`;
        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        })
    }


}
