import { Component, OnInit } from '@angular/core';
import {
    FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { SearchUsersService } from './search-users.service';

@Component({
    selector: 'app-search-users',
    templateUrl: './search-users.component.html',
    styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

    public searchUserControl = new FormControl('');
    public allUsers: any;
    public searchUserError: any;

    constructor(private userService: SearchUsersService,
                private router: Router) { }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        this.searchUserError = null;
        this.userService.getAllUsers().subscribe(
            (res) => {
                this.allUsers = res;
            },
            (err) => {
                this.searchUserError = err.error.message;
                console.log(err);
            }
        )
    }

    searchUser(event) {
        this.searchUserError = null;
        if (!event.target.value.length) {
            this.getAllUsers();
            return false;
        }
        this.userService.getUser(event.target.value).subscribe(
            (res) => {
                this.allUsers = res.items;
            },
            (err) => {
                this.searchUserError = err.error.message;
                console.log(err);
            }
        )
    }

    getUserRepos(user){
        this.router.navigate(['repos', user.login]);
    }

}
