import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  form: FormGroup;
  formState: { invalidCredentials: boolean, errorsInForm: boolean };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.formState = { invalidCredentials: false, errorsInForm: false };
  }

  login(): void {
    if (this.form.valid) {
      this.authSubscription = this.authenticationService.authenticate(this.form.value).subscribe(validCredentials => {
        if (validCredentials) {
          this.router.navigate(['/musical-instruments/list']);
        } else {
          this.formState.errorsInForm = false;
          this.formState.invalidCredentials = true;
          this.form.reset();
        }
      });
    } else {
      this.formState.errorsInForm = true;
    }
  }

  ngOnDestroy(): void {
    if (this.authSubscription !== undefined) {
      this.authSubscription.unsubscribe();
    }
  }

}
