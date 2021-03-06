import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
  
  canActivate(): Observable<boolean> {
    return this.authenticationService.authenticated
      .take(1)
      .map(authState => {
        if (!authState.authenticated) {
          this.router.navigate(['/']);
        }
        return authState.authenticated;
      });
  }

}
