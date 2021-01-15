import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NgZorroAntdModule, RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
