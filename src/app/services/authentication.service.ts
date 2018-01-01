import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {
  authenticatedUser: User;
  users: User[] = [
    { name: 'User X', credentials: { username: 'user', password: 'user' } },
    { name: 'Admin X', credentials: { username: 'admin', password: 'admin' } },
    { name: 'John', credentials: { username: 'john', password: 'john' } }
  ];
  authenticated: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  authenticate(credentials: Credentials): Observable<boolean> {
    this.authenticatedUser = this.users.find(user => user.credentials.username === credentials.username && user.credentials.password === credentials.password);
    const success: boolean = this.authenticatedUser !== undefined;
    this.authenticated.next(success);
    return Observable.of(success);
  }

  logout(): void {
    this.authenticatedUser = undefined;
    this.authenticated.next(false);
  }

}

interface Credentials {
  username: string;
  password: string;
}

interface User {
  name: string;
  credentials: Credentials;
}
