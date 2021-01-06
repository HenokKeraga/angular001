import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url = 'http://localhost:5000/api/auth/register';

  constructor(private httpClient: HttpClient) {}

  register(user):Observable<any[]> {
    console.log(user)
    return this.httpClient.post<any[]>(this.url, user, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}
