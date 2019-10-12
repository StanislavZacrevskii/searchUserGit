import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchUsersService {

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any> {
        return this.http.get(`https://api.github.com/users`);
    }

    getUser(userName: string): Observable<any> {
        return this.http.get(`https://api.github.com/search/users?q=${userName}`);
    }

    getUserRepo(login: string): Observable<any> {
        return this.http.get(`https://api.github.com/users/${login}/repos`);
    }
}
