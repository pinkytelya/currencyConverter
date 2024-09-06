import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class HeaderComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.usdRate = 1 / data.conversion_rates.USD;
      this.eurRate = 1 /  data.conversion_rates.EUR;
    });
  }
}
