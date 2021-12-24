import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { NbuService } from './services/nbu.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { DataChartComponent } from './data-chart/data-chart.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    DataTableComponent,
    DataChartComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgChartsModule],
  providers: [NbuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
