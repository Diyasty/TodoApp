import { DELETE_TODO, EDIT_TODO } from './../../store/actions/todos.actions';
import { AppState } from './../../store/index';
import { Store } from '@ngrx/store';
import { Todo } from './../../core/models/Todo.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ADD_TODO } from 'src/app/store/actions/todos.actions';
import { selectFeatureTodos } from 'src/app/store/selecetors/todo.selector';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  listOfData$!: Todo[];

  Todo$!: Todo;
  title: any;
  description: any;
  id!: any;
  status!: any;

  constructor(private _store: Store<AppState>, private fb: FormBuilder) {
    // this._store.subscribe((d: any) => (this.listOfData = d.todos.todos));
    this._store
      .select(selectFeatureTodos)
      .pipe(take(5))
      .subscribe((data) => {
        this.listOfData$ = data;
      });
  }
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  submitForm(title: string, description: string) {
    const todo = { title, description, status: false };
    console.log(todo);
    this._store.dispatch(ADD_TODO(todo));
  }
  isVisibleTop = false;
  isVisibleMiddle = false;

  isVisible = false;
  isOkLoading = false;
  onDelete(id: any) {
    // const todo = this.listOfData$.filter((x) => x.id != id);
    this._store.dispatch(DELETE_TODO({ id }));
  }
  showModal(id: any) {
    this.isVisible = true;
    const todo = this.listOfData$.find((x) => x.id === id);
    this.title = todo?.title;
    this.description = todo?.description;
    this.status = todo?.status;
    this.id = id;
  }

  handleOk(): void {
    console.log(this.title, this.description);

    const todo: Todo = {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
    };
    this.isOkLoading = true;
    this._store.dispatch(EDIT_TODO(todo));
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  handle(e: any) {
    console.log(e);
  }
}
