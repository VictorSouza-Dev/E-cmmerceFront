import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private currentUserSignal: WritableSignal<user | null> = signal(null);

  readonly currentUser = this.currentUserSignal.asReadonly();

  fetchUser(): Observable<user> {
    return this.http.get<user>(`${environment.apiUrl}user`).pipe(
      tap((userData) => {
        this.currentUserSignal.set(userData);
      }),
    );
  }

  logout(): void {
    this.currentUserSignal.set(null);
  }

  setCurrentUser(userData: user | null): void {
    this.currentUserSignal.set(userData);
  }
}
