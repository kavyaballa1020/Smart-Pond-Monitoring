import { Component } from '@angular/core'; // Ensure you have this import
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.userService.loginUser(this.user).subscribe((response: any) => { // Explicitly set response type as 'any'
      if (response) {
        alert('Login Successful!');
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials!');
      }
    });
  }
}
