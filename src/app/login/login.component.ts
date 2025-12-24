import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  // Hardcoded credentials
  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = 'password123';

  constructor(private router: Router) {}

  login() {
    this.error = '';

    if (!this.username || !this.password) {
      this.error = 'Please enter both username and password';
      return;
    }

    if (this.username === this.VALID_USERNAME && this.password === this.VALID_PASSWORD) {
      // Store login state in sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
