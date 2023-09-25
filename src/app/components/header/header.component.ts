import { Component } from '@angular/core';
import { SharedCartService } from 'src/app/services/shared-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItemCount: number = 0;

  constructor(private sharedCartService: SharedCartService) {}

  ngOnInit() {
    this.sharedCartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }}
