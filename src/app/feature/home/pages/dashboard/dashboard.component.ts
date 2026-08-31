import { Component } from '@angular/core';
import { ProductListComponent } from '../../../products/pages/product-list/product-list.component';

@Component({
  selector: 'app-dashboard.component',
  imports: [ProductListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
