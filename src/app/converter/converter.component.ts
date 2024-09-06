import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  imports: [
    FormsModule,
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class ConverterComponent implements OnInit {
  currencies = ['UAH', 'USD', 'EUR', 'CHF', 'GBP', 'AUD',];
  fromCurrency = 'UAH';
  toCurrency = 'USD';
  fromAmount!: number;
  toAmount!: number;
  rates: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.rates = data.conversion_rates;
      this.convertCurrency('from');
    });
  }

  convertCurrency(direction: string) {
    if (direction === 'from') {
      this.toAmount = parseFloat(((this.fromAmount * this.rates[this.toCurrency]) / this.rates[this.fromCurrency]).toFixed(2));
    } else {
      this.fromAmount = parseFloat(((this.toAmount * this.rates[this.fromCurrency]) / this.rates[this.toCurrency]).toFixed(2));
    }
  }

  getFlagClass(currency: string): string {
    switch (currency) {
      case 'USD':
        return 'flag-icon-us';
      case 'EUR':
        return 'flag-icon-eu';
      case 'UAH':
        return 'flag-icon-ua';
      case 'CHF':
        return 'flag-icon-ch';
      case 'GBP':
        return 'flag-icon-gb';
      case 'AUD':
        return 'flag-icon-au';
      default:
        return '';
    }
  }
}
