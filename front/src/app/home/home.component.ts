import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    users: User[];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    reload() {
        ///
        const url = 'http://localhost:8086/users';
        this.http.get<User[]>(url)
            .subscribe(res => {
                this.users = res;
            })
    }
}
