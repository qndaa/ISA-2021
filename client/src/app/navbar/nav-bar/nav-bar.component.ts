import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignOutClick = () => {
    this.authService.doLogout();
  }

}
