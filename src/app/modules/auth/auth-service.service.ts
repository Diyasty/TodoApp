import { User } from './../../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private _http: HttpClient) {}

  login(user: User) {
    return this._http.post<User>(' http://localhost:3000/auth/login', user);
  }
}
