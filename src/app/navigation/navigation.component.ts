import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { AuthState } from '../store/app-state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  authState: AuthState;
  authenticatedSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticatedSubscription = this.authenticationService.authenticated
      .subscribe(authState => this.authState = authState);
  }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription !== undefined) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

}
