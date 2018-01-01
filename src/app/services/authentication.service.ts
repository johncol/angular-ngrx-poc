import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { AppState, AuthState } from '../store/app-state';
import { LoginAction, LogoutAction } from '../store/auth.actions';

@Injectable()
export class AuthenticationService {
  users: User[] = [
    { name: 'User X', credentials: { username: 'user', password: 'user' } },
    { name: 'Admin X', credentials: { username: 'admin', password: 'admin' } },
    { name: 'John', credentials: { username: 'john', password: 'john' } }
  ];
  authenticated: Store<AuthState>;

  constructor(
    private store: Store<AppState>
  ) {
    this.authenticated = this.store.select('auth');
  }

  authenticate(credentials: Credentials): Observable<boolean> {
    const authenticatedUser = this.users
      .find(user => user.credentials.username === credentials.username && user.credentials.password === credentials.password);

    const success: boolean = authenticatedUser !== undefined;
    if (success) {
      this.store.dispatch(new LoginAction(authenticatedUser.name));
    }

    return Observable.of(success);
  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
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
