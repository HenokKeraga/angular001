import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://localhost:5000/api/auth/userinfo';

  constructor(private http: HttpClient) {}

  getUserProfile(token): Observable<Profile> {
    return this.http.get<any>(this.url, {
      headers: { 'x-access-token': token },
    });
  }
}
