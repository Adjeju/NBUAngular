import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NbuService {
  baseUrl: string =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getNbuInfo(currency: string, dateNumber: number) {
    return this.http.get(
      `${this.baseUrl}&date=${dateNumber}&valcode=${currency}`
    );
  }
}
