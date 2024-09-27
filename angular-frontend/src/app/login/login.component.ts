// login.component.ts
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };
  isLoading = false;

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.isLoading = true;
    this.userService.loginUser(this.user).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.isLoading = false;
        alert('Invalid credentials!');
      }
    });
  }
}