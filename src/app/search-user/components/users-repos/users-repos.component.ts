import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchUsersService } from './../../search-users.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-users-repos',
    templateUrl: './users-repos.component.html',
    styleUrls: ['./users-repos.component.scss']
})
export class UsersReposComponent implements OnInit {

    public userLogin: string;
    public repos: any;
    public modalRef: BsModalRef;
    public modalRepo: any;

    constructor(private userService: SearchUsersService,
                private route: ActivatedRoute,
                private modalService: BsModalService) {
        this.route.params.subscribe(
            (params) => {
                this.userLogin = params['login'];
            }
        );
    }

    ngOnInit() {
        this.getUserRepo(this.userLogin);
    }

    getUserRepo(login: string) {
        this.userService.getUserRepo(login).subscribe(
            (res) => {
                this.repos = res;
            },
            (err) => {
                console.log(err);
            }
        )
    }

    openModal(template: TemplateRef<any>, repo) {
        this.modalRepo = repo;
        this.modalRef = this.modalService.show(template);
    }

}
