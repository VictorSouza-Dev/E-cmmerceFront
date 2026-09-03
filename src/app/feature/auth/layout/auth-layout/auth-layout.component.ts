import { Component, inject, input, Output, output, signal, WritableSignal } from '@angular/core';
import { HeaderAuthComponent } from '../../components/header-auth/header-auth.component';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
@Component({
  selector: 'app-auth-layout',
  imports: [HeaderAuthComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {
  private readonly themeService: ThemeService = inject(ThemeService);

  isDarkTheme: WritableSignal<boolean> = this.themeService.isDarkTheme;
}
