import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, User, Search } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly UserIcon = User;
  readonly SearchIscon = Search;

  constructor(private eRef: ElementRef) {}

  isUserMenuOpen: boolean = false;
  isAuthenticated: boolean = false;
  isSearchActive: boolean = false;
  searchQuery: string = '';

  @ViewChild('searchInput')
  searchInputRef!: ElementRef<HTMLInputElement>;

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
    this.isAuthenticated = false;
    this.isUserMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isUserMenuOpen = false;
    }
  }
}
