import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$ = {
    firstName: 'Mohamed',
    lastName: 'Eldiyasty',
  };
  logOut() {}
  constructor() {}

  ngOnInit(): void {}
}
