import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUsersComponent } from './search-users.component';
import { UsersReposComponent } from './components/users-repos/users-repos.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchUsersService } from './search-users.service';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        SearchUsersComponent,
        UsersReposComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot(),
        AppRoutingModule
    ],
    exports: [],
    providers: [
        SearchUsersService
    ]
})
export class SearchUsersModule { }
