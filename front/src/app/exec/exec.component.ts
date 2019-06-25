import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExecResponse} from "../model/exec-response";

@Component({
    selector: 'app-exec',
    templateUrl: './exec.component.html',
    styleUrls: ['./exec.component.less']
})
export class ExecComponent implements OnInit {
    host: string;
    output: string[];
    errors: string[];
    adminpass: string = 'secret!';
    command: string = 'df';
    origin: string;


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.origin = window.location.origin;
        //this.host = this.origin + '/exec';
        this.host = 'http://localhost:8086/exec';
        console.log(`using origin: ${this.host}`);
    }


    executeCommand() {
        let url = this.host + `?pass=${this.adminpass}&cmd=${this.command}`;
        this.http.get<ExecResponse>(url).subscribe(res => {
            this.output = res.ouput;
            this.errors = res.error;
        })
    }

}
