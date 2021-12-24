import { Component } from '@angular/core';
import { NbuService } from './services/nbu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private nbuService: NbuService) {}

  dataSet: object[] = [];

  type: string = '';

  setData(obj: any) {
    this.dataSet = [];
    for (let i = 0; i < obj.numberOfRequests + 1; i++) {
      this.nbuService
        .getNbuInfo(obj.currency, parseInt(obj.startDate) + i)
        .subscribe((data: any) => {
          this.dataSet.push(...data);
        });
    }
    this.type = obj.type;
  }
}
