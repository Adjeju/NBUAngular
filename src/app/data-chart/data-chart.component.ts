import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.scss'],
})
export class DataChartComponent implements OnInit {
  @Input() dataSet: any = [];

  lineChartData: any = [];
  lineChartLabels: any = [];
  lineChartOptions: any = {};
  lineChartColors: any = [];
  lineChartLegend: boolean = false;
  lineChartPlugins: any = [];
  lineChartType: any = '';

  ngOnInit(): void {
    //дані приходять
    console.log(this.dataSet);
    //після map даних не має
    console.log(this.dataSet.map((item: any) => item.rate));

    this.lineChartData = [
      {
        // data: this.dataSet.map((item: any) => item.rate),
        data: [5, 10, 7],
        label: 'National bank of Ukraine',
      },
    ];

    // this.lineChartLabels = this.dataSet.map((item: any) => item.exchangedate);
    this.lineChartLabels = ['test1', 'test2', 'test3'];

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'none',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];

    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
  }
}
