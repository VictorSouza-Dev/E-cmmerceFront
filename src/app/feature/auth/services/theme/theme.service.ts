import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkTheme: WritableSignal<boolean> = signal(false);

  toggleTheme(): void {
    this.isDarkTheme.update((value) => !value);
  }
}
