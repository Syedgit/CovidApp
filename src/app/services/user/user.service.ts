import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    URL: string = "http://127.0.0.1:9001"
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.URL}${"/register"}` , user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}