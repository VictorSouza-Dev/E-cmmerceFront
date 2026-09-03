import { Component, output, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToogleThemeComponent } from '../../../../components/toogle-theme/toogle-theme.component';

@Component({
  selector: 'app-header-auth',
  imports: [RouterLink, ToogleThemeComponent],
  templateUrl: './header-auth.component.html',
  styleUrl: './header-auth.component.scss',
})
export class HeaderAuthComponent {}
