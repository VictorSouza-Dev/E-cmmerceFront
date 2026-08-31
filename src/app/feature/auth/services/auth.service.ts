import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { LoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient: HttpClient = inject(HttpClient);

  login(request: LoginRequest): Observable<any> {
    const response = this.httpClient.post(`${environment.apiUrl}auth/login`, request);

    return response;
  }
}
