import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(response => {
      if (response) {
        alert('Registration Successful!');
        this.router.navigate(['/login']);  // Redirect to the login page after registration
      } else {
        alert('Registration failed. Please try again.');
      }
    });
  }
}