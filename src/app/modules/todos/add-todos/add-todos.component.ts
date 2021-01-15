import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { ADD_TODO } from 'src/app/store/actions/todos.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss'],
})
export class AddTodosComponent implements OnInit {
  constructor(
    private _store: Store<AppState>,
    private fb: FormBuilder,
    private _router: Router
  ) {}
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  submitForm(title: string, description: string, form: NgForm) {
    const todo = { title, description };
    console.log(todo);
    this._store.dispatch(ADD_TODO(todo));
    form.reset();
    this._router.navigate(['/todos']);
  }
}
