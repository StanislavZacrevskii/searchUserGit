import {
    NgModule
} from '@angular/core';
import {
    RouterModule, Routes
} from '@angular/router';
import { SearchUsersComponent } from './search-user/search-users.component';
import { UsersReposComponent } from './search-user/components/users-repos/users-repos.component';

const routes: Routes = [
    {
        path: '',
        component: SearchUsersComponent
    },
    {
        path: 'repos/:login',
        component: UsersReposComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}