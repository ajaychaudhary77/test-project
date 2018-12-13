import { Component, OnInit } from '@angular/core';
import { TemperatureServiceService } from "./temperature-service.service";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test Home';


  constructor(private temperatureService:TemperatureServiceService){

  }

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    
  }
}
