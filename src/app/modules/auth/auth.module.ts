import { StoreModule } from '@ngrx/store';
import { UserEffect } from './../../store/effects/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgZorroAntdModule } from './../../shared/ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffect]),
    FormsModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
