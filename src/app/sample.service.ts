import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  sampleData:string[] = [
    "C",
    "C++",
    "Python",
    "Java",
    "PHP",
    "C#",
    "Go",
    "Ruby"
  ]
  constructor() { }

  getSampleData():Observable<string[]>{
    return of(this.sampleData);
  }
}
