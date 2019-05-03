import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DoughnutChartComponent } from './components/doughnut-chart.component';

import {
  ButtonModule,
  ChartModule,
  DialogModule,
  InputTextModule,
  PanelModule,
  SharedModule,
  SidebarModule,
  TreeModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // PrimeNG Modules
    ButtonModule,
    ChartModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    SharedModule,
    SidebarModule,
    TreeModule,
  ],
  declarations: [
    AppComponent,
    DoughnutChartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
