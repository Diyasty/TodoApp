import { selectFeatureAuth } from 'src/app/store/selecetors/auth.selector';
import { AppState } from './../../store/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  User$!: Observable<boolean>;
  logOut() {}
  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.User$ = this.store$.select(selectFeatureAuth);
  }
}
