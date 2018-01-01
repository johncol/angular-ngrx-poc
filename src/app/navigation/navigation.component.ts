import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  authenticated: boolean;
  authenticatedSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticatedSubscription = this.authenticationService.authenticated
      .subscribe(authenticated => this.authenticated = authenticated);
  }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription !== undefined) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

}
