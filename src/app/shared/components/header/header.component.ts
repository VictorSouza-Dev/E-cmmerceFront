import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, User, Search } from 'lucide-angular';
import { user } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private eRef: ElementRef = inject(ElementRef);

  readonly UserIcon = User;
  readonly SearchIcon = Search;

  readonly currentUser: Signal<user | null> = this.authService.currentUser;

  isUserMenuOpen: boolean = false;
  isSearchActive: boolean = false;
  searchQuery: string = '';

  @ViewChild('searchInput')
  searchInputRef!: ElementRef<HTMLInputElement>;

  @ViewChild('userDropdown')
  userDropdownRef!: ElementRef;

  ngOnInit(): void {
    if (!this.currentUser()) {
      this.authService.fetchUser().subscribe();
    }
  }

  get isAuthenticated(): boolean {
    return !!this.currentUser();
  }

  onSearch(): void {
    console.log('Search query:', this.searchQuery);
  }

  toggleSearch(): void {
    this.isSearchActive = true;
    setTimeout(() => {
      this.searchInputRef?.nativeElement.focus();
    }, 50);
  }

  onSearchBlur(): void {
    if (!this.searchQuery.trim()) {
      this.isSearchActive = false;
    }
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout(): void {
    this.isUserMenuOpen = false;
    this.authService.logout();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event): void {
    if (!this.userDropdownRef.nativeElement.contains(event.target)) {
      this.isUserMenuOpen = false;
    }
  }
}
