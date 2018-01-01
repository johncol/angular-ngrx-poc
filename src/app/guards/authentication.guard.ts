import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const authenticated: boolean = this.authenticationService.authenticatedUser !== undefined;
    if (!authenticated) {
      this.router.navigate(['/']);
    }
    return authenticated;
  }

}
