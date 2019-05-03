import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-doughnut',
  template: `<p-chart type="bar" [data]="data" [options]="chartOptions"></p-chart> `
})
export class DoughnutChartComponent implements OnInit {

  data: any;
    public chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        stepSize: 10,
        beginAtZero: true
      }
    }]
  }
}
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March'],
            datasets: [
                {  
         "label":"% Cases/Status",
         "data":[  
            20, 30, 50
         ],
         "fill":false,
         "backgroundColor":[  
            "#FF0000",
            "#FFFF02",
            "#008000",
         ],
         "borderWidth":1
      }
         ],
        }
    }

  ngOnInit() {
  }

}