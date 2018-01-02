import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Effect, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { AppState } from "./app-state";
import { AuthActionType } from "./auth.actions";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private router: Router
  ) { }

  @Effect({ dispatch: false })
  logoutRedirect: Observable<Action> = this.actions
    .ofType(AuthActionType.LOGOUT)
    .do(action => this.router.navigate(['/']));

}
