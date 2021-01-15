import { NgZorroAntdModule } from './../../shared/ng-zorro-antd.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

import { AddTodosComponent } from './add-todos/add-todos.component';
import { EditTodosComponent } from './edit-todos/edit-todos.component';

@NgModule({
  declarations: [TodosComponent, AddTodosComponent, EditTodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    NgZorroAntdModule,

    AuthModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TodosModule {}
