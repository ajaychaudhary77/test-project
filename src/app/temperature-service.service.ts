import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Temperature } from '../../models/temperature';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureServiceService {
  temperatures : Temperature[];
  private serviceRoot = "/api/";

  constructor(private http:HttpClient) { 

   }

  
  public getTemperatures() : Observable<Temperature[]> {
    return this.http.get<Temperature[]> (this.serviceRoot);
  }
  
}
