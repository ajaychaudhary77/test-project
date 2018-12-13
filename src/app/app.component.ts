import { Component, OnInit } from '@angular/core';
import { TemperatureServiceService } from "./temperature-service.service";
import { Temperature } from '../models/temperature';
import { Chart } from 'chart.js';
import { $ } from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dashboard Home';

  temperatures : Temperature[] = [];
  maxTemp:Temperature;
  minTemp:Temperature;
  chartTemperatures:number[];
  chartDates : string[];
  averageTemperature:number;

  constructor(private temperatureService:TemperatureServiceService){
    this.maxTemp = new Temperature();
    this.minTemp = new Temperature();
    this.temperatures = [];
    this.chartDates = [];
    this.chartTemperatures = [];
    this.averageTemperature = 0;
  }

  ngOnInit(){
    this.getTemperatures();
  }

  ngAfterViewInit(){
    
  }

  getTemperatures(): void {
    this.temperatures = [];
    this.chartDates = [];
    this.chartTemperatures = [];
    
    this.temperatureService.getTemperatures().subscribe(temperatures => {
      this.maxTemp = new Temperature(temperatures[0].node_id, temperatures[0].temperature, new Date(temperatures[0].timestamp));
      this.minTemp = new Temperature(temperatures[0].node_id, temperatures[0].temperature, new Date(temperatures[0].timestamp));
      let averageTemperature = 0;

      temperatures.forEach(element => {
        let temp = new Temperature(element.node_id, element.temperature, new Date(element.timestamp));

        averageTemperature += temp.temperature;
        this.temperatures.push(temp);
        
        if(this.maxTemp.temperature < temp.temperature){
          this.maxTemp = temp;
        }else if(this.minTemp.temperature > temp.temperature ){
          this.minTemp = temp;
        }

        this.chartTemperatures.push(temp.temperature);
        this.chartDates.push(temp.timestamp.toDateString());

      });
      this.averageTemperature = averageTemperature / temperatures.length;

      this.printChart();
    });
  }

  printChart(){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';

    let temperatures = this.chartTemperatures;
    let dates = this.chartDates;

    // Area Chart Example
    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: "Temperatures",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: temperatures,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
  }

  refresh():void{
    this.getTemperatures();
  }
}
