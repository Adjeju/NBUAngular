import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
})
export class CurrencyFormComponent {
  @Output() formEvent = new EventEmitter<object>();

  currenciesCode: Array<string> = ['USD', 'RUB', 'EUR'];
  currency = 'USD';
  startDate = '';
  endDate = '';

  selectChangeHandler(value: string) {
    this.currency = value;
  }

  startInputChangeHandler(value: string) {
    this.startDate = value;
  }

  endInputChangeHandler(value: string) {
    this.endDate = value;
  }

  pushData(type: string) {
    this.formEvent.emit({
      type,
      currency: this.currency,
      startDate: this.startDate.split('-').join(''),
      endDate: this.endDate.split('-').join(''),
      numberOfRequests:
        parseInt(this.endDate.split('-').join('')) -
        parseInt(this.startDate.split('-').join('')),
    });
  }
}
