import { Router } from '@angular/router';
import { LOGIN_Success } from './../actions/user.actions';
import { AuthServiceService } from './../../modules/auth/auth-service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginAction } from '../actions/user.actions';
import { exhaustMap, map, tap } from 'rxjs/operators';

@Injectable()
export class UserEffect {
  constructor(
    private auth: AuthServiceService,
    private action: Actions,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.action.pipe(
      ofType(loginAction),
      exhaustMap((action) =>
        this.auth.login(action).pipe(
          map((data: any) => {
            return LOGIN_Success(data);
          })
        )
      )
    );
  });

  isUser$ = createEffect(
    () => {
      return this.action.pipe(
        ofType(LOGIN_Success),
        tap((a) => {
          this.router.navigate(['/todos']);
        })
      );
    },
    { dispatch: false }
  );
}
