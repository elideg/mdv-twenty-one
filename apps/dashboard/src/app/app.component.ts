import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-one/core-data';

@Component({
  selector: 'mdv-twenty-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { path: '/dogs', icon: 'work', title: 'dogs' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
