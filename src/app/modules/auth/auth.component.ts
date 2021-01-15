import { ADD_TODO } from './../../store/actions/todos.actions';
import { AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private _store$: Store<AppState>) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this._store$.dispatch(loginAction(this.validateForm.value));
  }
}
