import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Password} from "../model/password";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.less']
})
export class PasswordComponent implements OnInit {

    host: string;
    output: string;

    adminpass: string = 'secret!';
    command: string = 'df';
    origin: string;
    user: string;
    pass: string;
    new_pass: string;


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.origin = window.location.origin;
        //this.host = this.origin + '/exec';
        this.host = 'http://localhost:8086/password/';
        console.log(`using origin: ${this.host}`);
    }


    check_password() {
        let url = this.host + `check?user=${this.user}&pass=${this.pass}`;

        this.http.get<Password>(url).subscribe(res => {
                this.output = res.status;
                console.log(this.output);
        })
    }
    change_password() {
        let url = this.host + `change?user=${this.user}&pass=${this.pass}&new=${this.new_pass}`;

        this.http.get<Password>(url).subscribe(res => {
            this.output = res.status;
            console.log(this.output);
        })
    }

}
