import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  constructor(private userAuth: UserAuthService) {
    this.isLogged = this.userAuth.isUserLogged;
    console.log(this.isLogged);
  }

  ngOnInit(): void {
    this.userAuth.gitStatus().subscribe((status) => (this.isLogged = status));
    console.log(this.isLogged);
  }
}
