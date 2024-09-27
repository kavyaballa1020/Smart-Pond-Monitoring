import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'your_api_endpoint'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user); // Adjust as needed
  }
}
