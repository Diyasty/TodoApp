import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodosComponent } from './modules/todos/add-todos/add-todos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todos',
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'add',
    component: AddTodosComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
