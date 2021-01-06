import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:5000/api/auth/login';

  constructor(private httpClient: HttpClient) {}

  loginUser(user): Observable<any> {
    console.log(user);
    return this.httpClient.post<any>(this.url, user);
  }
}
