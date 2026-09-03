import { Component, inject, output, signal, WritableSignal } from '@angular/core';
import { ThemeService } from '../../feature/auth/services/theme/theme.service';

@Component({
  selector: 'app-toogle-theme',
  imports: [],
  templateUrl: './toogle-theme.component.html',
  styleUrl: './toogle-theme.component.scss',
})
export class ToogleThemeComponent {
  private readonly themeService: ThemeService = inject(ThemeService);

  readonly isDarkTheme: WritableSignal<boolean> = this.themeService.isDarkTheme;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
